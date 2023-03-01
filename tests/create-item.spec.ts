import { test, expect } from './base.ts';

test('create food item', async ({ page }) => {
	// Given I am on the homepage
	await page.goto('/');

	// When I fill out the form
	const foodItem = {
		name: 'test food item',
		protein: '10',
		carb: '10',
		fat: '5',
		calories: '145'
	};

	await page.getByPlaceholder('name').fill(foodItem.name);
	await page.getByPlaceholder('protein').fill(foodItem.protein);
	await page.getByPlaceholder('carb').fill(foodItem.carb);
	await page.getByPlaceholder('carb').fill(foodItem.carb);
	await page.getByPlaceholder('fat').fill(foodItem.fat);
	await page.getByPlaceholder('calories').fill(foodItem.calories);

	// And click the submit button
	await page.locator('button[type="submit"]').click();

	// Then I will see the name food I created in the list
	const newFood = page.getByTestId('foodListItem').first();
	expect(newFood.textContent()).toEqual(foodItem.name);

	// And I will see the macronutrient values
});
