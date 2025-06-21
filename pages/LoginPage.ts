import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async gotoLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com');
  }

  async login(username: string, password: string) {
    await this.fill('input[name="username"]', username);
    await this.fill('input[name="password"]', password);
    await this.click('button[type="submit"]');
  }

  async isDashboardVisible(): Promise<boolean> {
    return this.waitUntilVisible('h6:has-text("Dashboard")');
  }
}
