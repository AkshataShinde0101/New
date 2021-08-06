$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dashboard.feature");
formatter.feature({
  "line": 2,
  "name": "JBK offline application Test",
  "description": "",
  "id": "jbk-offline-application-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@dash"
    }
  ]
});
formatter.before({
  "duration": 28112168100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify courses",
  "description": "",
  "id": "jbk-offline-application-test;verify-courses",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@dash"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user should be on login dashboard page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user will create a list of courses",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user verify the courses with expected",
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardStepdefination.user_should_be_on_login_dashboard_page()"
});
formatter.result({
  "duration": 5281996200,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepdefination.user_will_create_a_list_of_courses()"
});
formatter.result({
  "duration": 237245800,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepdefination.user_verify_the_courses_with_expected()"
});
formatter.result({
  "duration": 13489200,
  "status": "passed"
});
formatter.after({
  "duration": 252397400,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "JBK offline application Test",
  "description": "",
  "id": "jbk-offline-application-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 2714136800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#cucumber tags are use to run specific scenario"
    }
  ],
  "line": 6,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters uname and pass",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 3005055100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_uname_and_pass()"
});
formatter.result({
  "duration": 291813200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_login_button()"
});
formatter.result({
  "duration": 400737600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 18605500,
  "status": "passed"
});
formatter.after({
  "duration": 153363800,
  "status": "passed"
});
formatter.before({
  "duration": 2079561400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "logo test",
  "description": "",
  "id": "jbk-offline-application-test;logo-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@logo"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user should see JBK logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 3031223100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_see_JBK_logo()"
});
formatter.result({
  "duration": 214395800,
  "status": "passed"
});
formatter.after({
  "duration": 151558000,
  "status": "passed"
});
});