import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../support/world';
import { AdminPage } from '../../pages/AdminPage';

When('I navigate to the Admin section', async function (this: CustomWorld) {
  await new AdminPage(this.page).goToAdmin();
});

When('I search for username {string}', async function (this: CustomWorld, username: string) {
  await new AdminPage(this.page).searchUser(username);
});

Then('I should see {string} in the search results', async function (this: CustomWorld, name: string) {
  expect(await new AdminPage(this.page).isUserPresent(name)).toBeTruthy();
});