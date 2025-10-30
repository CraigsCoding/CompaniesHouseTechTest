# Test Plan - [Companies House Technical Test]

## 1. Introduction
### 1.1 Purpose
As part of the required technical test for Companies House, I have produced this document to support my overall test framework, outline what I have covered, what I would cover given more time and an overall strategy on how I would implement a test solution for automationintesting.online

### 1.2 Scope
So for this test. I prioristised executing test automation to cover the main user journeys. The majority of my time was spent writing the test automation and providing a base level of test coverage. However I have also considered non-functional by briefly testing the accessibility design of the website. I also have considered what my areas of focus would be running JMeter against this website. 

Whilst Security testing is extremely important. It is not something I am particularly experienced in other than a foundational knowledge in. So I considered this out of scope for this particular tech test.

## 2. Test Strategy
### 2.1 Testing Types
- Functional Testing
- UI/UX Testing
- Performance Testing (Planned but not executed)
- Accessibility Testing

### 2.2 Testing Tools
Playwright with Typescript

## 3. Test Coverage
### 3.1 Automation Test Coverage 

Test Suite|Test Case Name|Priority|Status|
----------|--------------|--------|------|
Navigation Bar|Navigate to amenities section via Nav Bar link|High|❌ Fail|
Navigation Bar|Navigation Bar is visible|High|✅ Pass|
Navigation Bar|Navigate to Rooms section via Nav Bar link|Medium|✅ Pass|
Navigation Bar|Navigate to Booking Availability Section via Nav Bar link|Medium|✅ Pass|
Navigation Bar|Navigate to location section via Nav Bar link|Medium|✅ Pass|
Navigation Bar|Navigate to contact us section via Nav Bar link|Medium|✅ Pass|
Navigation Bar|Navigate to admin page via Nav Bar link|Medium|✅ Pass|
Room Availability|setting date in past should not allow check availability button to be clicked|High|❌ Fail|
Room Availability|setting checkout date before checkin date should not allow check availability button to be clicked|High|❌ Fail|
Room Availability|date input boxes enforce english date format|High|❌ Fail|
Room Availability|date input boxes do not accept invalid date entries|High|❌ Fail|
Room Availability|Check Availability subsection title is displayed|Medium|✅ Pass|
Room Availability|page scrolls to rooms after clicking check availability button|Medium|✅ Pass|
Contact Form|Contact Form section is visible|Medium|✅ Pass|
Contact Form|Contact Form has name, email, phone, subject & message fields and submit button|High|✅ Pass|
Contact Form|Submitting the contact form with valid data shows a success message|High|✅ Pass|
Contact Form|Submitting the contact form with missing required data shows an error message|High|✅ Pass|
Location|Location subsection title and description is displayed|Medium|✅ Pass|
Location|location map is visible|Medium|✅ Pass|
Location|contact information is visible|Medium|✅ Pass|
Room Section|Room section title and description are visible|Medium|✅ Pass|
Room Section|There are 3 rooms displayed|High|✅ Pass|
Room Section|Each room displays image, description, price and book button|High|✅ Pass|

### 3.2 Accessibility Testing
For the Accessibility Testing I had a few notes from exploratory testing prior to automating the tests: 
 - The Website is generally responsive and is able to handle an acceptable amount of different screen sizes. 
 - The Calendar Widget on the booking page is not well designed for those with accessibility requirements. As it forces the user to use drag and drop to select dates. If the user has motor function accessibility requirements, they would have difficulties using this functionality. 

 I also used the WAVE accessibility tool on the website for the two main webpages; Homepage and Booking page. For both pages, The tool evaluated the accessibility as 6.5 out of 10. I have provided screenshots for both pages assessments in the /screenshots folder in the base directory 

 ### 3.3 Performance Testing
 Generally speaking from usage, I experienced no performance issues using the website. However if I was to do a performance test of this website. I would focus on two specific areas using JMeter:
  - Room Availability - A bug I found was that the website does not prevent the user from trying to reserve if the room is not available and it is only handled server side. Therefore doing the availability searches and requests I feel like could uncover more issues. 
  - Room Booking - As this would also be server side traffic, with the only check client side being the validity of the users entered personal details. I feel this could also be another area of concern with performance if the server becomes overloaded with booking requests. Potentially requesting the same dates. As there is no basket reservation mechanism it could allow a lot of requests for the same dates to come through unrestricted.  
