import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../support/world';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

Given('I am on the OrangeHRM login page', async function (this: CustomWorld) {
  await new LoginPage(this.page).gotoLoginPage();
});

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
  await new LoginPage(this.page).login(username, password);
});

Then('I should see an error message {string}', async function (this: CustomWorld, message: string) {
  const actual = await new LoginPage(this.page).getErrorMessage();
  expect(actual).toContain(message);
});

When('I click on the profile dropdown', async function (this: CustomWorld) {
  await this.page.click('.oxd-userdropdown-name');
});

When('I click on {string}', async function (this: CustomWorld, option: string) {
  await this.page.click(`text=${option}`);
});

Then('I should be redirected to the login page', async function (this: CustomWorld) {
  const dashboard = new DashboardPage(this.page);
  const visible = await dashboard.isOnLoginPage();
  expect(visible).toBeTruthy();
});