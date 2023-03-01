import { test as base } from '@playwright/test';

export const test = base.extend({
	page: async ({ page }, use) => {
		// enable console log outputs to be visible
		page.on('console', (msg) => {
			console.log(msg);
		});

		console.log('Test Suite running...');

		await use(page);
	}
});

export { expect } from '@playwright/test';
