$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/adminfunctions.feature");
formatter.feature({
  "name": "To test Admin functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Admin change the status pending to confirmed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter the url \"https://phptravels.net/api/admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enter username \"admin@phptravels.com\" and password \"demoadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the admin home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_admin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on pending pyamentButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_on_pending_pyamentButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the list of pending payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_list_of_pending_payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change status pending to confirmed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.change_status_pending_to_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the confirmed status",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.check_the_confirmed_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the admin browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.close_the_admin_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Display booking invoice where payment is successfull.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter the url \"https://phptravels.net/api/admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enter username \"admin@phptravels.com\" and password \"demoadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the admin home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_admin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on paid pyamentButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_on_paid_pyamentButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the list of paid payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_list_of_paid_payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Invoce",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.click_on_Invoce()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the admin browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.close_the_admin_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin Delete the cancelled pyment",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter the url \"https://phptravels.net/api/admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enter username \"admin@phptravels.com\" and password \"demoadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the admin home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_admin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on cancelled pyamentButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_on_cancelled_pyamentButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the list of cancelled payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_list_of_cancelled_payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete all list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.delete_all_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the admin browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.close_the_admin_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin click on Website Link",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter the url \"https://phptravels.net/api/admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enter username \"admin@phptravels.com\" and password \"demoadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the admin home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_admin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on \"Website\" link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "redirected to different page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.redirected_to_different_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the admin browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.close_the_admin_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/adminlogin.feature");
formatter.feature({
  "name": "To test Admin login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Admin login is successfull with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter the url \"https://phptravels.net/api/admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enter username \"admin@phptravels.com\" and password \"demoadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the admin home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_admin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the admin browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.close_the_admin_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin login is successfull with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter the url \"https://phptravels.net/api/admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enter username \"ad@phptravels.com\" and password \"demoadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message will show",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.error_message_will_show()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the admin browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.close_the_admin_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/agentfunction.feature");
formatter.feature({
  "name": "To test the Agent functions",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Agent Searching the hotel in the city",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "agent launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter username \"agent@phptravels.com\" and password \"demoagent\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Hotel Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_Hotel_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the city \"Dubai\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.enter_the_city(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display list of results",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.display_list_of_results()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Agent update the USD TO INR",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "agent launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter username \"agent@phptravels.com\" and password \"demoagent\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on AddFund",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_AddFund()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the AddFund",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_AddFund()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on USD drop down",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_USD_drop_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select INR",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.select_INR()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Agent click on main tabs",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "agent launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter username \"agent@phptravels.com\" and password \"demoagent\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on my Booking",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_my_Booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the My Bookings",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_My_Bookings()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on AddFund",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_AddFund()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the AddFund",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_AddFund()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on My profile",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_My_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the My profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_My_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_Logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Loginpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_Loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Agent click on all links",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "agent launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter username \"agent@phptravels.com\" and password \"demoagent\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Hotel Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_Hotel_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_Hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Flight Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_Flight_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Flight page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_Flight_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Tours Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_Tours_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Tours page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_Tours_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on visa Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_visa_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the visa page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_visa_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Offers Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_Offers_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Offers page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_Offers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Blog Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.click_on_Blog_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Blog page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.launch_the_Blog_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/agentlogin.feature");
formatter.feature({
  "name": "To test Customer login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login is successfull with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "agent launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter username \"agent@phptravels.com\" and password \"demoagent\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent login to successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_login_to_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is successfull with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "agent launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent enter username \"aget@phptravels.com\" and password \"demoagnt\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.error_message_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agent close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AgentStepClass.agent_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/customerfunctions.feature");
formatter.feature({
  "name": "Customer functions",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "commen step",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_enter_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check the customer main Links and functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on My Booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_on_My_Booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Mybooking page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.launch_the_Mybooking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Add Funds",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_on_Add_Funds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Add Funds",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.launch_the_Add_Funds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on My Profile",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_on_My_Profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the My Profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.launch_the_My_Profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Logout",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_Logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.launch_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "commen step",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_enter_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check My Booking",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on My Booking",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_on_My_Booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on voucher",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_on_voucher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.launch_the_voucher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "commen step",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_enter_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check payment using paypal",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on Add Funds",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_on_Add_Funds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select paypal",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.select_paypal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select textfield enter 50 USD and click on pay",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.select_textfield_enter_USD_and_click_on_pay(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Invoice",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.launch_the_Invoice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "commen step",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_enter_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check My Profile Upadte",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on My Profile",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_on_My_Profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Address text field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.select_Address_text_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter updated address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.enter_updated_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click update button and success message will show",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_update_button_and_success_message_will_show()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/customerlogin.feature");
formatter.feature({
  "name": "To test Customer login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login is successfull with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USER enter username \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login to successfully and logout",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.logout_to_success_fully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is successfull with invalid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USER enter username \"user@phptravels\" and password \"demouser\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.user_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message will show",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.error_message_will_show()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CutomerStepsClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/supllierlogin.feature");
formatter.feature({
  "name": "To test Supllier login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Supllier login is successfull with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Supllier launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter the url \"https://phptravels.net/supplier\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter username \"supplier@phptravels.com\" and password \"demosupplier\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Supllier home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.launch_the_Supllier_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Supllier browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.close_the_Supllier_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Supllier login is successfull with invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Supllier launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter the url \"https://phptravels.net/supplier\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter username \"ad@phptravels.com\" and password \"demoadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_message_will_show()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Supllier browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.close_the_Supllier_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/suppllierfunction.feature");
formatter.feature({
  "name": "Test the Supplier Functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Supllier check the text \"Sales overview and summary\"",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Supllier launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter the url \"https://phptravels.net/supplier\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter username \"supplier@phptravels.com\" and password \"demosupplier\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Supllier Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.launch_the_Supllier_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the text \"Sales overview \u0026 summary\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.check_the_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Supllier browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.close_the_Supllier_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Supllier check the text Revenue Breakdown",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Supllier launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter the url \"https://phptravels.net/supplier\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter username \"supplier@phptravels.com\" and password \"demosupplier\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Supllier Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.launch_the_Supllier_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the text Revenue Breakdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.check_the_text_Revenue_Breakdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Supllier browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.close_the_Supllier_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Supllier change the pending to confirmed status",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Supllier launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter the url \"https://phptravels.net/supplier\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter username \"supplier@phptravels.com\" and password \"demosupplier\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supplier click on Pending status",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supplier_click_on_Pending_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch the pending list",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.launch_the_pending_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change the pending to confirmed status",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.change_the_pending_to_confirmed_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the status count in DashBoard",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.check_the_status_count_in_DashBoard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Supllier browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.close_the_Supllier_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Supllier check the licks are clickcble or not",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Supllier launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter the url \"https://phptravels.net/supplier\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier enter username \"supplier@phptravels.com\" and password \"demosupplier\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier click on Car Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_click_on_Flight_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier click on Tours Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_click_on_Tours_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Supllier  click on Hotel Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.supllier_click_on_visa_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Supllier browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.SupllierStepClass.close_the_Supllier_browser()"
});
formatter.result({
  "status": "passed"
});
});