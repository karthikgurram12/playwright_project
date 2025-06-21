import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../support/world';
import { LoginPage } from '../../pages/LoginPage';
import fs from 'fs';
import path from 'path';
import { assert } from 'console';

Given('I am on the OrangeHRM login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.gotoLoginPage();
});

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(username, password);
});

Then('I should see the dashboard', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isDashboardVisible();
  expect(visible).toBeFalsy();
  expect(visible).toBeTruthy();
});
