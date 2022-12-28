Feature: To test Customer login functionality
 Scenario: Check login is successfull with valid data
    Given user launch the browser 
    And enter the url "https://www.phptravels.net/login"
    When USER enter username "user@phptravels.com" and password "demouser"
    And click login button
    Then login to successfully and logout
    And close the browser
 
  Scenario: Check login is successfull with invalid data
    Given user launch the browser 
    And enter the url "https://www.phptravels.net/login"
    When USER enter username "user@phptravels" and password "demouser"
    And click login button
    Then error message will show
    And close the browser
