$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/login.feature");
formatter.feature({
  "name": "To test login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login is successfull with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user IS ON LOGIN PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.is_ON_LOGIN_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USER enterd username and passowrd",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.user_enterd_username_and_passowrd()"
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
  "name": "logont to success full",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginstepsClass.logont_to_success_full()"
});
formatter.result({
  "status": "passed"
});
});