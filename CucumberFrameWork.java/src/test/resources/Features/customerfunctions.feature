Feature: Customer functions

 Background: commen step
    Given user launch the browser 
    And enter the url "https://www.phptravels.net/login"
    And  User enter valid username "user@phptravels.com" and password "demouser"

Scenario: check the customer main Links and functionality
    When click on My Booking
    Then launch the Mybooking page
    When click on Add Funds
    Then launch the Add Funds
    When click on My Profile
    Then launch the My Profile
   	When click Logout
    Then launch the Login page
    And close the browser
       
Scenario: check My Booking
    When click on My Booking
    And click on voucher
    Then launch the voucher
    And close the browser
     
Scenario:check payment using paypal
    When click on Add Funds
    And select paypal
    And select textfield enter 50 USD and click on pay
    Then launch the Invoice
    And close the browser
    
Scenario:check My Profile Upadte
    When click on My Profile
    And select Address text field
    And enter updated address
    Then click update button and success message will show
    And close the browser
   