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
exports.AdminPage = void 0;
const BasePage_1 = require("./BasePage");
class AdminPage extends BasePage_1.BasePage {
    goToAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click('a[href*="/admin/viewAdminModule"]');
        });
    }
    searchUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fill('input[placeholder="Username"]', username);
            yield this.click('button:has-text("Search")');
        });
    }
    isUserPresent(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.isVisible(`text=${username}`);
        });
    }
}
exports.AdminPage = AdminPage;
