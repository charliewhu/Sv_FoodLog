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
	await page.getByLabel('updateFoodItem').click();

	// Then the url will be correct
	const food = await prisma.food.findFirst();
	await expect(page).toHaveURL(`/${food?.id}/update`);

	/// And I will see the item in the form
	await expect(page.getByPlaceholder('Name')).toHaveValue(foodData.name);
	await expect(page.getByPlaceholder('Calories')).toHaveValue(String(foodData.calories));
	await expect(page.getByPlaceholder('Protein')).toHaveValue(String(foodData.protein));
	await expect(page.getByPlaceholder('Carb')).toHaveValue(String(foodData.carb));
	await expect(page.getByPlaceholder('Fat')).toHaveValue(String(foodData.fat));

	// When I add the new details to the form
	const newName = 'new food name';
	await page.getByPlaceholder('Name').fill(newName);

	// And I click the update button
	await page.locator('button[aria-label="submitUpdateFoodItem"]').click();

	// Then I will be on the main screen
	await expect(page).toHaveURL(`/`);

	// And the new details will be displayed
	await expect(page.getByTestId('foodListItem')).toContainText(newName);
});
