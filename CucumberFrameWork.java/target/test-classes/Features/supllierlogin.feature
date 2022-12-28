Feature: To test Supllier login functionality

 Scenario: Supllier login is successfull with valid data
    Given Supllier launch the browser 
    And Supllier enter the url "https://phptravels.net/supplier"
    When Supllier enter username "supplier@phptravels.com" and password "demosupplier"
    And Supllier click login button
    Then launch the Supllier home page
    And close the Supllier browser
 
  Scenario: Supllier login is successfull with invalid credentials
    Given Supllier launch the browser 
    And Supllier enter the url "https://phptravels.net/supplier"
    When Supllier enter username "ad@phptravels.com" and password "demoadmin"
    And Supllier click login button
    Then Display error message
    And close the Supllier browser