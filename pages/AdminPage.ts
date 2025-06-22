import { BasePage } from './BasePage';

export class AdminPage extends BasePage {
  async goToAdmin() {
    await this.click('a[href*="/admin/viewAdminModule"]');
  }

  async searchUser(username: string) {
  // More reliable selector based on label proximity
  await this.fill('div.oxd-input-group:has(label:text("Username")) input', username);
  await this.click('button:has-text("Search")');

  // Optionally wait for search results to appear (e.g., first row or no records)
  await this.page.waitForSelector('.oxd-table-body', { timeout: 5000 });
}


  async isUserPresent(username: string): Promise<boolean> {
    return await this.isVisible(`text=${username}`);
  }
}