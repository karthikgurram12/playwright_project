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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../../pages/LoginPage");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
(0, cucumber_1.Given)('I am on the OrangeHRM login page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const loginPage = new LoginPage_1.LoginPage(this.page);
        yield loginPage.gotoLoginPage();
    });
});
(0, cucumber_1.When)('I login with username {string} and password {string}', function (username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const loginPage = new LoginPage_1.LoginPage(this.page);
        yield loginPage.login(username, password);
    });
});
(0, cucumber_1.Then)('I should see the dashboard', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const loginPage = new LoginPage_1.LoginPage(this.page);
        const visible = yield loginPage.isDashboardVisible();
        if (!visible) {
            const screenshotDir = path_1.default.join('screenshots');
            const screenshotPath = path_1.default.join(screenshotDir, `dashboard-failure-${Date.now()}.png`);
            const ss = yield this.page.screenshot();
            fs_1.default.mkdirSync(screenshotDir, { recursive: true });
            fs_1.default.writeFileSync(screenshotPath, ss);
            console.log(`❌ Screenshot saved to: ${screenshotPath}`);
        }
        (0, test_1.expect)(visible).toBeTruthy();
    });
});
