import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm dev --port 7357',
		port: 7357
	},
	testDir: 'tests'
};

export default config;
