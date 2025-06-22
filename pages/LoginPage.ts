import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async gotoLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
  }

  async login(username: string, password: string) {
    await this.fill('input[name="username"]', username);
    await this.fill('input[name="password"]', password);
    await this.click('button[type="submit"]');
  }

  async getErrorMessage(): Promise<string> {
    return await this.getText('.oxd-alert-content-text');
  }
}