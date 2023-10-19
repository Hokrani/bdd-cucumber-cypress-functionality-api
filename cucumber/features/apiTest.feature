Feature: API Testing
 Scenario Outline:: Check GET method API Testing
 Given I Set GET all employee from api endpoint
 When I Set request HEADER
 Then I receive valid Get Response with "<status>"
 Examples:
| status  |
| success |


 Scenario Outline:: Check Post method API Testing
 Given I Set Post all employee from api endpoint
 When I Set request HEADER
 And Send a request body with "<name>", "<salary>" and "<age>"
 Then I receive valid Post Response with "<status>"
 Examples:
|name|salary|age| status  |
|test|234   |22 | success |
