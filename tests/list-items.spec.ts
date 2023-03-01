import { test, expect } from './base.ts';
import { prisma } from '../src/lib/server/prisma.ts';

test('list items', async ({ page }) => {
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

	// When I navigate to the homepage
	page.goto('/');

	// Then I will see today's foods
	const foodCount = prisma.food.count();
	const pageFoods = page.getByTestId('foodListItem');
	await expect(pageFoods).toHaveCount(foodCount);

	const firstFood = await prisma.food.first();
	await expect(page.getByText(firstFood)).toBeVisible();
});
