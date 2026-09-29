// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  reporter: "html",
  timeout: 30000,
      use: {
    browserName: "firefox",
    trace: "on",
    screenshot: "on",
    headless: false
        }
  
});

