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
exports.DashboardPage = void 0;
const BasePage_1 = require("./BasePage");
class DashboardPage extends BasePage_1.BasePage {
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click('.oxd-userdropdown-name');
            yield this.clickByText('Logout');
        });
    }
    isOnLoginPage() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.isVisible('input[name="username"]');
        });
    }
}
exports.DashboardPage = DashboardPage;
