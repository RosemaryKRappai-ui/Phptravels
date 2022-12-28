Feature: To test Customer login functionality
 Scenario: Check login is successfull with valid data
    Given agent launch the browser 
    And agent enter the url "https://www.phptravels.net/login"
    When agent enter username "agent@phptravels.com" and password "demoagent"
    And agent click login button
    Then agent login to successfully
    And agent close the browser
 
 Scenario: Check login is successfull with valid data
    Given agent launch the browser 
    And agent enter the url "https://www.phptravels.net/login"
    When agent enter username "aget@phptravels.com" and password "demoagnt"
    And agent click login button
    Then error message display
    And agent close the browser
