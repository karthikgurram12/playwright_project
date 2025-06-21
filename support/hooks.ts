import { Before, After, ITestCaseHookParameter } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.initBrowser();
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  // 📸 Take screenshot if the scenario fails
  if (scenario.result?.status === 'FAILED' && this.page) {
    const dir = path.join('screenshots');
    fs.mkdirSync(dir, { recursive: true });

    const safeName = scenario.pickle.name.replace(/[^a-zA-Z0-9-_]/g, '_');
    const filePath = path.join(dir, `FAILED_${safeName}_${Date.now()}.png`);

    await this.page.screenshot({ path: filePath });
    console.log(`📸 Screenshot captured: ${filePath}`);
  }

  // 🧹 Close the browser
  if (this.browser) {
    await this.browser.close();
    console.log('🛑 Browser closed');
  }
});
