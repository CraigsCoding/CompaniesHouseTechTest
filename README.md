# Companies House Tech Test

## Overview
This project is a technical test implementation for Companies House. It demonstrates coding abilities, best practices, and problem-solving skills. Based on the website design. I opted for a page/section object model. Due to the fact the homepage holding a significant amount of the website functionality. Having a section as well as page model, Allowed for better abstraction and organisation. 

## Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

## Installation Instructions
1. Clone the repository:
```bash
git clone https://github.com/CraigsCoding/CompaniesHouseTechTest.git
cd CompaniesHouseTechTest
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests
### Run all tests
```bash
npx playwright test
```

### Run tests with UI Mode
```bash
npx playwright test --ui
```

### Run specific test file
```bash
npx playwright test filename.spec.ts
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View test report
```bash
npx playwright show-report
```

## Debug Tests
1. Run tests in debug mode:
```bash
npx playwright test --debug
```

2. Use VS Code debugger:
   - Set breakpoints in your test files
   - Run "Playwright Test: Debug" from VS Code's Run panel

## Project Structure
```
bug-reports/          # Detailed bug reports in markdown format
screenshots/
├── accessibilityReports/
└── bugReportSupportingScreenshots/
src/
├── pages/           # Page Object Models
├── sections/        # Section Object Models
├── tests/          # Test files
└── utils/          # Helper functions and utilities
test-plan/          # Test strategy and planning documentation
```

## Technologies Used
- TypeScript
- Node.js
- Playwright
- VS Code (recommended IDE)

## Test Plan
The Test Plan created for this project can be found in the test-plan folder which is within the parent directory. It contains a markdown file breaking down the different aspects of this project. 

## Bug Reports
Bug Reports can be found in the bug-reports folder which is within the parent directory. It contains markdown files for each of the bugs found during testing (8 in total). Where appropriate, there are supporting screenshots for bug reports. They are embedded in the markdown files. If there are any issues with these when opening a report, the screenshots can be found in screenshots/bugReportSupportingScreenshots.

## Troubleshooting
- If tests fail to run, ensure all prerequisites are installed
- Check Node.js version: `node --version`
- Clear Playwright browser cache: `npx playwright clear-browser-cache`
- Update Playwright: `npm install -D @playwright/test@latest`

## Author
Craig Pearce