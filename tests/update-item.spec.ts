import { test, expect } from './base.ts';
import { prisma } from '../src/lib/server/prisma.ts';

test('update food item', async ({ page }) => {
	const foodData = {
		date: new Date(),
		name: 'Bread',
		protein: 4,
		carb: 15,
		fat: 1,
		calories: 100
	};

	// Given there is an item in the database
	await prisma.food.create({
		data: foodData
	});

	// And I am on the homepage
	await page.goto('/');

	// And the item is visible
	const pageFoods = page.getByTestId('foodListItem');
	expect(await pageFoods.count()).toBeGreaterThan(0);

	// When I click the edit item button
	await page.locator('button[aria-label="updateFoodItem"]').click();

	// Then the url will be correct
	const food = await prisma.food.findFirst();
	await expect(page).toHaveURL(`/${food?.id}/update`);

	/// And I will see the item in the form
	const form = page.getByRole('form');
	const formText = await form.allInnerTexts();
	expect(formText).toContain(foodData.name);
	expect(formText).toContain(foodData.calories);
	expect(formText).toContain(foodData.protein);
	expect(formText).toContain(foodData.carb);
	expect(formText).toContain(foodData.fat);
});
