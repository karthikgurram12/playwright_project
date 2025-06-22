import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  async logout() {
    await this.click('.oxd-userdropdown-name');
    await this.clickByText('Logout');
  }

  async isOnLoginPage(): Promise<boolean> {
  return await this.waitUntilVisible('input[name="username"]');
}

}