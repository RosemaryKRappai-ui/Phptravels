#Author: rosemary

Feature: To test the Agent functions
 Scenario: Agent Searching the hotel in the city
		Given agent launch the browser 
    And agent enter the url "https://www.phptravels.net/login"
    When agent enter username "agent@phptravels.com" and password "demoagent"
   	And agent click login button
  	And click on Hotel Link
    And enter the city "Dubai"
   Then Display list of results
   And agent close the browser
  
 Scenario: Agent update the USD TO INR
		Given agent launch the browser 
    And agent enter the url "https://www.phptravels.net/login"
    When agent enter username "agent@phptravels.com" and password "demoagent"
   	And agent click login button
  	And click on AddFund
   Then launch the AddFund
   And click on USD drop down
   And select INR
   And agent close the browser
   
 Scenario: Agent click on main tabs
		Given agent launch the browser 
    And agent enter the url "https://www.phptravels.net/login"
    When agent enter username "agent@phptravels.com" and password "demoagent"
   	And agent click login button
   And click on my Booking
   Then launch the My Bookings
  	And click on AddFund
   Then launch the AddFund
    And click on My profile
   Then launch the My profile
  	And click on Logout
   Then launch the Loginpage
   And agent close the browser
     
 
 Scenario: Agent click on all links
		Given agent launch the browser 
    And agent enter the url "https://www.phptravels.net/login"
    When agent enter username "agent@phptravels.com" and password "demoagent"
   	And agent click login button
   And click on Hotel Link
   Then launch the Hotel page
  	And click on Flight Link
   Then launch the Flight page
    And click on Tours Link
   Then launch the Tours page
  	And click on visa Link
   Then launch the visa page
   And click on Offers Link
   Then launch the Offers page
   And click on Blog Link
   Then launch the Blog page
   And agent close the browser
   