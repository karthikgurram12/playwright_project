import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  // ✅ Wait until element is visible
  async waitUntilVisible(selector: string, timeout = 10000): Promise<boolean> {
    return !!(await this.page.waitForSelector(selector, {
      state: 'visible',
      timeout,
    }).catch(() => null));
  }

  // ✅ Wait until element is enabled and clickable
  async waitUntilEnabled(selector: string, timeout = 10000): Promise<boolean> {
    const element = await this.page.waitForSelector(selector, { timeout }).catch(() => null);
    return element ? await element.isEnabled() : false;
  }

  // ✅ Click with wait
  async click(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout: 10000 });
    await this.page.click(selector);
  }

  // ✅ Fill input with wait
  async fill(selector: string, value: string) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout: 10000 });
    await this.page.fill(selector, value);
  }

  // ✅ Get page title (for assertions or logs)
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  // ✅ Capture screenshot on demand
  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `reports/${name}.png`, fullPage: true });
  }
}
