Feature: To test Admin login functionality
 Scenario: Admin login is successfull with valid data
    Given Admin launch the browser 
    And Admin enter the url "https://phptravels.net/api/admin"
    When admin enter username "admin@phptravels.com" and password "demoadmin"
    And admin click login button
    Then launch the admin home page
    And close the admin browser
 
  Scenario: Admin login is successfull with valid data
    Given Admin launch the browser 
    And Admin enter the url "https://phptravels.net/api/admin"
    When admin enter username "ad@phptravels.com" and password "demoadmin"
    And admin click login button
    Then Error message will show
    And close the admin browser
 