# Companies House Tech Test

## Overview
This project is a technical test implementation for Companies House. It demonstrates coding abilities, best practices, and problem-solving skills. Based on the website design. I opted for a page/section object model. Due to the fact the homepage holding a significant amount of the website functionality. Having a section as well as page model, Allowed for better abstraction and organisation. 

## Installation
```bash
npm install
```

## Testing
```bash
npx playwright test
```

## Project Structure
```
bug-reports
screenshots
├── accessibilityReports/
└── bugReportSupportingScreenshots
src/
├── pages/
├── sections/
├── tests/
└── utils
test-plan
```

## Technologies Used
- TypeScript
- Node.js
- Playwright

## Author
Craig Pearce

## Test Plan
The Test Plan created for this project can be found in the test-plan folder which is within the parent directory. It contains a markdown file breaking down the different aspects of this project. 

## Bug Reports
Bug Reports can be found in the bug-reports folder which is within the parent directory. It contains markdown files for each of the bugs found during testing (8 in total). Where appropriate, there are supporting screenshots for bug reports. They are embedded in the markdown files. If there are any issues with these when opening a report, the screeenshots can be found in screenshots/bugReportSupportingScreenshots as shown in the project structure section above. 