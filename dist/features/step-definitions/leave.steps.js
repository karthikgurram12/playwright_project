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
const LeavePage_1 = require("../../pages/LeavePage");
(0, cucumber_1.When)('I navigate to Leave > Apply', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield new LeavePage_1.LeavePage(this.page).navigateToApply();
    });
});
(0, cucumber_1.When)('I select leave type {string}', function (type) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new LeavePage_1.LeavePage(this.page).applyLeave(type);
    });
});
(0, cucumber_1.Then)('I should see {string} in My Leave list', function (status) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, test_1.expect)(yield new LeavePage_1.LeavePage(this.page).isLeavePending()).toBeTruthy();
    });
});
