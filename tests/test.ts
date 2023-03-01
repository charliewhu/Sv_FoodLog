//import { expect, test } from '@playwright/test';
//import { expect } from '@playwright/test';
import { test, expect } from './base.ts';

test('index page has expected h1', async ({ page }) => {
	//await page.goto('/')
	console.log(process.env.DATABASE_URL);
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});
