$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/1Google_Plus_paid_user.feature");
formatter.feature({
  "line": 2,
  "name": "Already user subcribe the application with google plus id.",
  "description": "",
  "id": "already-user-subcribe-the-application-with-google-plus-id.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@google_plus_user_paid"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Already subscribe the product with google plus id.",
  "description": "",
  "id": "already-user-subcribe-the-application-with-google-plus-id.;already-subscribe-the-product-with-google-plus-id.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open home page of the application.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select style as complete ppt.",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Select any project slider.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on downloadbtn test5 link.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on googlePlus link.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter user google email addess.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "go to password page.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter user google pass.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on next CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The Page is redirect to download presenetion link.",
  "keyword": "Then "
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.navigates_to_website_url()"
});
