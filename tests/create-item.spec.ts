import { test, expect } from './base.ts';
import { prisma } from '../src/lib/server/prisma.ts';

test('create food item', async ({ page }) => {
	// Given I am on the homepage
	await page.goto('/');

	// When I fill out the form
	const foodItem = {
		name: 'test food item',
		protein: '10',
		carb: '12',
		fat: '5',
		calories: '145'
	};

	await page.getByPlaceholder('Name').fill(foodItem.name);
	await page.getByPlaceholder('Protein').fill(foodItem.protein);
	await page.getByPlaceholder('Carb').fill(foodItem.carb);
	await page.getByPlaceholder('Fat').fill(foodItem.fat);
	await page.getByPlaceholder('Calories').fill(foodItem.calories);

	// And click the submit button
	await page.locator('button[type="submit"]').click();

	// Then I will see the name food I created in the list
	const newFood = page.getByTestId('foodListItem').first();
	const newFoodText = await newFood.innerText();
	expect(newFoodText).toContain(foodItem.name);

	// And I will see the macronutrient values
	expect(newFoodText).toContain(foodItem.calories);
	expect(newFoodText).toContain(foodItem.protein);
	expect(newFoodText).toContain(foodItem.carb);
	expect(newFoodText).toContain(foodItem.fat);
});
