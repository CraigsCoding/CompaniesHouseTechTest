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
src/
├── pages/
├── sections/
├── tests/
└── index.ts
```

## Technologies Used
- TypeScript
- Node.js
- Playwright

## Author
Craig Pearce

bugs TODO
no data validation on the date availabiity inputs (user can book in past, user can checkout before they check in etc.)
Amenities does not link to anything 
user can manipulate URL to get to hidden room types when booking (twin rooms) 
Rooms breadcrumb does not link to anything 
footer buttons do not work and just scroll up if you are on booking page
User is charged for days rather than nights (if you check in one day and check out the next, it charges you for 2 days), seems to be if you use the calendar widget, not directly changing the URL parameters
user gets application error if trying to book a room if the room is not available for that date
reserve button is enabled even when room is unavailable
calendar widget is not designed for accessibility, if someone has a condition related to motor function they would have difficulty selecting a date as its only drag and drop functionality.