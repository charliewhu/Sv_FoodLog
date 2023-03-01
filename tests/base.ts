import { test as base } from '@playwright/test';

export const test = base.extend({
	page: async ({ page }, use) => {
		// We have a few cases where we need our app to know it's running in Playwright.
		// This is inspired by Cypress that auto-injects window.Cypress.
		// await page.addInitScript(() => {
		// 	(window as any).Playwright = true;
		// });

		await page.goto('/');
		console.log('Running');

		await use(page);
	}
});

export { expect } from '@playwright/test';
