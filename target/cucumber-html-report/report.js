$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "line": 2,
  "name": "signin Test On Web Application",
  "description": "",
  "id": "signin-test-on-web-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signInTest"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "",
  "id": "signin-test-on-web-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@signInTest_tochek_payement_option"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open the website url.",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "click on most downloaded link.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step_definition.navigates_to_website_url()"
});
formatter.result({
  "duration": 7039205000,
  "status": "passed"
});
formatter.match({
  "location": "Login_step_definition.click_most_download()"
});
formatter.result({
  "duration": 5068210100,
  "status": "passed"
});
});