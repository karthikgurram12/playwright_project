"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../../pages/LoginPage");
const DashboardPage_1 = require("../../pages/DashboardPage");
(0, cucumber_1.Given)('I am on the OrangeHRM login page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield new LoginPage_1.LoginPage(this.page).gotoLoginPage();
    });
});
(0, cucumber_1.When)('I login with username {string} and password {string}', function (username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new LoginPage_1.LoginPage(this.page).login(username, password);
    });
});
(0, cucumber_1.Then)('I should see an error message {string}', function (message) {
    return __awaiter(this, void 0, void 0, function* () {
        const actual = yield new LoginPage_1.LoginPage(this.page).getErrorMessage();
        (0, test_1.expect)(actual).toContain(message);
    });
});
(0, cucumber_1.When)('I click on the profile dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.page.click('.oxd-userdropdown-name');
    });
});
(0, cucumber_1.When)('I click on {string}', function (option) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.page.click(`text=${option}`);
    });
});
(0, cucumber_1.Then)('I should be redirected to the login page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const dashboard = new DashboardPage_1.DashboardPage(this.page);
        (0, test_1.expect)(yield dashboard.isOnLoginPage()).toBeTruthy();
    });
});
