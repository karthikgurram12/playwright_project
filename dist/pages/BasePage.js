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
exports.BasePage = void 0;
class BasePage {
    constructor(page) {
        this.page = page;
    }
    waitUntilVisible(selector_1) {
        return __awaiter(this, arguments, void 0, function* (selector, timeout = 10000) {
            return !!(yield this.page.waitForSelector(selector, {
                state: 'visible',
                timeout,
            }).catch(() => null));
        });
    }
    waitUntilEnabled(selector_1) {
        return __awaiter(this, arguments, void 0, function* (selector, timeout = 10000) {
            const element = yield this.page.waitForSelector(selector, { timeout }).catch(() => null);
            return element ? yield element.isEnabled() : false;
        });
    }
    click(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.waitForSelector(selector, { state: 'visible', timeout: 10000 });
            yield this.page.click(selector);
        });
    }
    fill(selector, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.waitForSelector(selector, { state: 'visible', timeout: 10000 });
            yield this.page.fill(selector, value);
        });
    }
    getTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.title();
        });
    }
    takeScreenshot(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.screenshot({ path: `reports/${name}.png`, fullPage: true });
        });
    }
    isVisible(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.page.isVisible(selector);
            }
            catch (_a) {
                return false;
            }
        });
    }
    selectByText(selector, visibleText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.waitForSelector(selector, { state: 'visible' });
            yield this.page.selectOption(selector, { label: visibleText });
        });
    }
    getText(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield this.page.waitForSelector(selector, { state: 'visible' });
            return ((_a = (yield this.page.textContent(selector))) === null || _a === void 0 ? void 0 : _a.trim()) || '';
        });
    }
    clickByText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(`text=${text}`);
        });
    }
}
exports.BasePage = BasePage;
