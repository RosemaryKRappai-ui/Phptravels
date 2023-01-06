Feature:Test the Supplier Functionalities
Background: common steps
	Given Supllier launch the browser 
    And Supllier enter the url "https://phptravels.net/supplier"
    When Supllier enter username "supplier@phptravels.com" and password "demosupplier"
    And Supllier click login button


Scenario: Supllier check the text "Sales overview and summary" 
    Then launch the Supllier Dashboard
    And check the text "Sales overview & summary"
    And close the Supllier browser
    
Scenario: Supllier check the text Revenue Breakdown
    Then launch the Supllier Dashboard
    And check the text Revenue Breakdown
    And close the Supllier browser
    
 Scenario: Supllier change the pending to confirmed status
    And Supplier click on Pending status
    Then Launch the pending list
    And change the pending to confirmed status
    And check the status count in DashBoard
    And close the Supllier browser  
    
Scenario: Supllier check the links are clickcble or not
  	And Supllier click on Car Link
    And Supllier click on Tours Link
  	And Supllier  click on Hotel Link
  	And click on Booking Link
    Then close the Supllier browser    
    
    
    