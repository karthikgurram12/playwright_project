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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
(0, cucumber_1.Before)(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.initBrowser();
    });
});
(0, cucumber_1.After)(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        // 📸 Take screenshot if the scenario fails
        if (((_a = scenario.result) === null || _a === void 0 ? void 0 : _a.status) === 'FAILED' && this.page) {
            const dir = path_1.default.join('screenshots');
            fs_1.default.mkdirSync(dir, { recursive: true });
            const safeName = scenario.pickle.name.replace(/[^a-zA-Z0-9-_]/g, '_');
            const filePath = path_1.default.join(dir, `FAILED_${safeName}_${Date.now()}.png`);
            yield this.page.screenshot({ path: filePath });
            console.log(`📸 Screenshot captured: ${filePath}`);
        }
        // 🧹 Close the browser
        if (this.browser) {
            yield this.browser.close();
            console.log('🛑 Browser closed');
        }
    });
});
