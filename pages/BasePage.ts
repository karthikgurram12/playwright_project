import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async waitUntilVisible(selector: string, timeout = 10000): Promise<boolean> {
    return !!(await this.page.waitForSelector(selector, {
      state: 'visible',
      timeout,
    }).catch(() => null));
  }

  async waitUntilEnabled(selector: string, timeout = 10000): Promise<boolean> {
    const element = await this.page.waitForSelector(selector, { timeout }).catch(() => null);
    return element ? await element.isEnabled() : false;
  }

  async click(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout: 10000 });
    await this.page.click(selector);
  }

  async fill(selector: string, value: string) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout: 10000 });
    await this.page.fill(selector, value);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `reports/${name}.png`, fullPage: true });
  }

  async isVisible(selector: string): Promise<boolean> {
    try {
      return await this.page.isVisible(selector);
    } catch {
      return false;
    }
  }

  async selectByText(selector: string, visibleText: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.selectOption(selector, { label: visibleText });
  }

  async getText(selector: string): Promise<string> {
    await this.page.waitForSelector(selector, { state: 'visible' });
    return (await this.page.textContent(selector))?.trim() || '';
  }

  async clickByText(text: string) {
    await this.page.click(`text=${text}`);
  }
}