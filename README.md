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

// to run regression suite (4 tests) -> npx cucumber-js --tags "@regression"
// to run smoke suite (2 tests) -> npx cucumber-js --tags "@smoke"

// run tests in parallel - npx cucumber-js --tags "@smoke" --parallel 2
// npx cucumber-js --tags "@regression" --parallel 4

// run sequence is decided by how we keep or align the features files, if we want to keep anything at first, just name it like 1_feature_file_name