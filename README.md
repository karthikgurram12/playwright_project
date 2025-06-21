# 🧪 Playwright Automation Framework with Cucumber and HTML Reporting

This is an end-to-end UI test automation framework built using:

- ✅ [Playwright](https://playwright.dev/)
- ✅ [Cucumber.js](https://github.com/cucumber/cucumber-js) (BDD)
- ✅ [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter)
- ✅ TypeScript
- ✅ OrangeHRM demo application

---

## 📁 Project Structure

playwright-framework/
├── features/ # Feature files (BDD)
├── step-definitions/ # Step implementations
├── pages/ # Page Object Model classes
├── support/ # Hooks, world, report generator
│ └── generate-html-report.ts
├── screenshots/ # Auto-saved screenshots on failure
├── cucumber-report.json # JSON report (auto-generated)
├── cucumber-html-report.html # HTML report (auto-generated)
├── tsconfig.json
├── cucumber.js # Cucumber CLI config
└── package.json    


---

## 🚀 Getting Started

### 1️⃣ Clone & Install Dependencies

```bash
git clone <repo-url>
cd playwright-framework
npm install

Run Tests & Generate Report
npm run test:html

This does:

✅ Executes Cucumber BDD tests with Playwright

✅ Creates a JSON report

✅ Generates an HTML report and opens it in the browser

npm run test	-> Runs all tests using Cucumber
npm run report	-> Generates the HTML report only
npm run test:html	-> Runs tests + generates HTML report