import { test, expect } from './base.ts';
import { prisma } from '../src/lib/server/prisma.ts';

test('list items', async ({ page }) => {
	const yesterday = new Date();

	// Given there arent any items
	// When I navigate to the homepage
	await page.goto('/');

	// Then the list should not be visible
	await expect(page.getByTestId('foodList')).not.toBeVisible();

	// And a message should be shown
	await expect(page.getByText("You haven't logged any food today")).toBeVisible();

	// Given some logged foods today
	await prisma.food.create({
		data: {
			date: new Date(),
			name: 'Egg',
			protein: 7,
			carb: 2,
			fat: 7,
			calories: 70
		}
	});

	await prisma.food.create({
		data: {
			date: new Date(),
			name: 'Bread',
			protein: 4,
			carb: 15,
			fat: 1,
			calories: 100
		}
	});

	await prisma.food.create({
		data: {
			date: new Date(yesterday.setDate(yesterday.getDate() - 1)),
			name: 'Bread',
			protein: 4,
			carb: 15,
			fat: 1,
			calories: 100
		}
	});

	// When I navigate to the homepage
	await page.goto('/');

	// Then I will see today's foods
	// And not yesterdays foods
	const foodCount = await prisma.food
		.findMany({
			where: {}
		})
		.count();
	const pageFoods = page.getByTestId('foodListItem');
	await expect(pageFoods).toHaveCount(foodCount);

	const firstFood = await prisma.food.findFirst();
	const firstFoodName = firstFood?.name;
	await expect(page.getByText(firstFoodName)).toBeVisible();
});
