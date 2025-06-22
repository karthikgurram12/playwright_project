import { BasePage } from './BasePage';

export class LeavePage extends BasePage {
  async navigateToApply() {
    await this.click('a[href*="leave"]');
    await this.clickByText('Apply');
  }

  async applyLeaveIfAvailable(type: string) {
  await this.page.waitForTimeout(2000);
  const hasNoTypes = await this.page.isVisible('text=No Leave Types with Leave Balance');
  if (hasNoTypes) {
    console.log('No Leave Types available for this user');
    return false;
  }
  await this.selectByText('select', type);
  const today = new Date().toISOString().split('T')[0];
  await this.fill('input[placeholder="yyyy-mm-dd"]', today);
  await this.clickByText('Apply');
  return true;
}


  async isLeavePending(): Promise<boolean> {
  await this.clickByText('My Leave');
  await this.page.waitForSelector('text=Pending Approval', { timeout: 5000 });
  return await this.isVisible('text=Pending Approval');
}

}