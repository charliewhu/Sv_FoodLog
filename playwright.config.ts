import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm dev --port 7357',
		port: 7357
	},
	testDir: 'tests',

	/* Opt out of parallel tests*/
	workers: 1,

	expect: {
		/**
		 * Maximum time expect() should wait for the condition to be met.
		 * For example in `await expect(locator).toHaveText();`
		 */
		timeout: 3000
	}
};

export default config;
