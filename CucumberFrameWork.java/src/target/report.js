$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/supllierlogin.feature");
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
});