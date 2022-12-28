$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/customerlogin.feature");
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
  "location": "StepDefinition.LoginstepsClass.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USER enter username \"user@phptravels.com\" and password \"demouser\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.user_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login to success fully and logout",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.logout_to_success_fully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.close()\" because \"this.driver\" is null\r\n\tat StepDefinition.CustomerLinksFunctionality.close(CustomerLinksFunctionality.java:93)\r\n",
  "status": "failed"
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
  "location": "StepDefinition.LoginstepsClass.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the url \"https://www.phptravels.net/login\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USER enter username \"user@phptravels\" and password \"demouser\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.user_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message will show",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.error_message_will_show()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.close()\" because \"this.driver\" is null\r\n\tat StepDefinition.CustomerLinksFunctionality.close(CustomerLinksFunctionality.java:93)\r\n",
  "status": "failed"
});
});