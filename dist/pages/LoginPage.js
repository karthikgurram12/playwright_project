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
exports.LoginPage = void 0;
const BasePage_1 = require("./BasePage");
class LoginPage extends BasePage_1.BasePage {
    gotoLoginPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto('https://opensource-demo.orangehrmlive.com/');
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fill('input[name="username"]', username);
            yield this.fill('input[name="password"]', password);
            yield this.click('button[type="submit"]');
        });
    }
    getErrorMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getText('.oxd-alert-content-text');
        });
    }
}
exports.LoginPage = LoginPage;
