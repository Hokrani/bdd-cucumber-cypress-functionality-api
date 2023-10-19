Feature: User Login
   Scenario: Successful login
Given   Open MYBIJNESSGURU application
When    Provide valid userName and Password
Then    Click on submit button
Then    Click on Proceed to store button
And     Verify title of Dashboard Page