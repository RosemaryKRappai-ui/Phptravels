Feature: To test Admin functionality
Background:
		Given Admin launch the browser 
    And Admin enter the url "https://phptravels.net/api/admin"
     When admin enter username "admin@phptravels.com" and password "demoadmin"
    And admin click login button
    Then launch the admin home page
 
Scenario: Admin change the status pending to confirmed 
 		When Admin click on pending pyamentButton
    Then launch the list of pending payment
    And change status pending to confirmed
    And check the confirmed status
    And close the admin browser
 
 Scenario: Display booking invoice where payment is successfull.
    When Admin click on paid pyamentButton
    Then launch the list of paid payment
    And click on Invoce
    And close the admin browser
    
 Scenario: Admin Delete the cancelled pyment
 		When Admin click on cancelled pyamentButton
    Then launch the list of cancelled payment
    And Delete all list
    And close the admin browser
    
Scenario: Admin click on Website Link
 		When Admin click on "Website" link
    Then redirected to different page  
    And close the admin browser