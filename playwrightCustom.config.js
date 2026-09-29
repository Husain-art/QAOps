// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  reporter: "html",
  timeout: 30000,
  projects:[
    {
      name: "chromium exc",
      use: {
    browserName: "chromium",
    trace: 'on-first-retry',
    screenshot: "on",
    headless: false
        }
    },

        {
      name: "Firefox exc",
      use: {
    browserName: "firefox",
    trace: 'on-first-retry',
    screenshot: "on",
    headless: false,
    ...devices["iPhone X"]
        }
    },
    
  ]
  
});

