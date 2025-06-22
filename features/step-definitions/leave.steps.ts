import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../support/world';
import { LeavePage } from '../../pages/LeavePage';

When('I navigate to Leave > Apply', async function (this: CustomWorld) {
  await new LeavePage(this.page).navigateToApply();
});

When('I select leave type {string}', async function (this: CustomWorld, type: string) {
  await new LeavePage(this.page).applyLeaveIfAvailable(type);
});

Then('I should see {string} in My Leave list', async function (this: CustomWorld, status: string) {
  expect(await new LeavePage(this.page).isLeavePending()).toBeTruthy();
});
