import { test, expect } from './base.ts';
import { prisma } from '../src/lib/server/prisma.ts';

test('create food item', async ({ page }) => {
	// Given there is an item in the database
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

	// And I am on the homepage
	await page.goto('/');

	// And the item is visible
	let pageFoods = page.getByTestId('foodListItem');
	expect(await pageFoods.count()).toBeGreaterThan(0);

	// When I click the delete button
	await page.locator('button[aria-label="deleteFoodItem"]').click();

	// Then I will not see any list items
	pageFoods = page.getByTestId('foodListItem');
	expect(await pageFoods.count()).toEqual(0);
});
