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
formatter.result({
  "duration": 2380068400,
  "status": "passed"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.click_most_download()"
});
formatter.result({
  "duration": 29714700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.GooglePlus_signin_paid_user_stepDefinitio.click_most_download(GooglePlus_signin_paid_user_stepDefinitio.java:53)\r\n\tat ✽.And Select style as complete ppt.(src/test/resources/1Google_Plus_paid_user.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.enter_user_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.enter_user_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.google_pass()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.verify_uesr_validation_message_for_Email_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/1facebookUser_already_subscribe.feature");
formatter.feature({
  "line": 2,
  "name": "Already user subcribe the application with facebook id.",
  "description": "",
  "id": "already-user-subcribe-the-application-with-facebook-id.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@fbuser_nonpaid"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Already subscribe the product.",
  "description": "",
  "id": "already-user-subcribe-the-application-with-facebook-id.;already-subscribe-the-product.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open given the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "go to Complete ppts",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "product as Project Scoping Powerpoint",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on download this presentation",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on test fblink",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user email as",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user password as",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "See the this link as download this presenetion link is appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.navigates_to_website_url()"
});
formatter.result({
  "duration": 2220749400,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.click_most_download()"
});
formatter.result({
  "duration": 21589500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_signin_paid_user_stepDefinition.click_most_download(Facebook_signin_paid_user_stepDefinition.java:53)\r\n\tat ✽.And go to Complete ppts(src/test/resources/1facebookUser_already_subscribe.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.enter_user_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.enter_user_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.verify_uesr_validation_message_for_Email_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/2Google_plus_user_logout.feature");
formatter.feature({
  "line": 2,
  "name": "Clear google plus history.",
  "description": "",
  "id": "clear-google-plus-history.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Paid_google_clear_history"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Redirect to google plus page.",
  "description": "",
  "id": "clear-google-plus-history.;redirect-to-google-plus-page.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "open the google plus page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Google_plus_browser_clear_Step.navigates_to_website_url()"
});
formatter.result({
  "duration": 13963321000,
  "status": "passed"
});
formatter.uri("src/test/resources/2facebook_logout.feature");
formatter.feature({
  "line": 2,
  "name": "Logout the appliction .",
  "description": "",
  "id": "logout-the-appliction-.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@fblogout"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "log out the Fb paid user account.",
  "description": "",
  "id": "logout-the-appliction-.;log-out-the-fb-paid-user-account.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "navigate to the facebook url.",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbpaid_User_logout.navigates_to_website_url()"
});
formatter.result({
  "duration": 13682299000,
  "status": "passed"
});
formatter.uri("src/test/resources/Email_signin_paid_user.feature");
formatter.feature({
  "line": 2,
  "name": "Already user subcribe the application.",
  "description": "",
  "id": "already-user-subcribe-the-application.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@paidUser_email"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Already subscribe the product.",
  "description": "",
  "id": "already-user-subcribe-the-application.;already-subscribe-the-product.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Complete ppts",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Select a product as Project Scoping Powerpoint",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on download this presentation link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter a user email",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the user password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Login cta",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the download this presenetion link is appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.navigates_to_website_url()"
});
formatter.result({
  "duration": 2277223600,
  "status": "passed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.click_most_download()"
});
formatter.result({
  "duration": 29729600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Email_Signin_paidUser_stepDefinition.click_most_download(Email_Signin_paidUser_stepDefinition.java:53)\r\n\tat ✽.And Click on Complete ppts(src/test/resources/Email_signin_paid_user.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.enter_user_email_address_as()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.enter_user_password_as()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.verify_uesr_validation_message_for_Email_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/FBUser_Create_sigin.feature");
formatter.feature({
  "line": 2,
  "name": "create new fbuser.",
  "description": "",
  "id": "create-new-fbuser.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Fbuser_create_new_fb__user"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "create the application with facebook user.",
  "description": "",
  "id": "create-new-fbuser.;create-the-application-with-facebook-user.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Launching the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "On the Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Open the download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on create as account link.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on faceblink.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fb user enter a valid email.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Fb user enter valid password.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on login cta on fb page.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the randamly the subscription product.",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify the payement section on the app.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.launching_the_application_URL()"
});
formatter.result({
  "duration": 3401531500,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 12399700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts(Facebook_create_sigin_unpaid_stepDefin.java:57)\r\n\tat ✽.And Select product list as Complete ppts.(src/test/resources/FBUser_Create_sigin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_faceblink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.fb_user_enter_a_valid_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.fb_user_enter_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_login_cta_on_fb_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_randamly_the_subscription_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.verify_the_payement_section_on_the_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "create-new-fbuser.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Launching the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Select product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "On the Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Open the download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on create as account link.",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on faceblink.",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "the randamly the subscription product.",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "By default payment option as paypal is selected.",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter the the offer code is off is showing.",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Apply the code.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Verify the apply offer code is appeared.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Place order the product.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.launching_the_application_URL()"
});
formatter.result({
  "duration": 2226289900,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 14247100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts(Facebook_create_sigin_unpaid_stepDefin.java:57)\r\n\tat ✽.And Select product list as Complete ppts.(src/test/resources/FBUser_Create_sigin.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_faceblink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_randamly_the_subscription_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.by_default_payment_option_as_paypal_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.enter_coupon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.apply_the_cuopon_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.verify_the_applied_coupon_code_offer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "",
  "description": "",
  "id": "create-new-fbuser.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Launching the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Select product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "On the Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Open the download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on create as account link.",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click on faceblink.",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the randamly the subscription product.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "By default payment option as paypal is selected.",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Place order the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Verify the payment page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.launching_the_application_URL()"
});
formatter.result({
  "duration": 3327448800,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 15753700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts(Facebook_create_sigin_unpaid_stepDefin.java:57)\r\n\tat ✽.And Select product list as Complete ppts.(src/test/resources/FBUser_Create_sigin.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_faceblink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_randamly_the_subscription_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.by_default_payment_option_as_paypal_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.verify_the_paypal_payement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 48,
  "name": "",
  "description": "",
  "id": "create-new-fbuser.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "Launching the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "Select product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "On the Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Open the download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Click on create as account link.",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Click on faceblink.",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "The user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the randamly the subscription product.",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Select the payment option as CARD is given.",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Enter the the offer code is off is showing.",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Apply the code.",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Verify the apply offer code is appeared.",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Place order the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Verify the payment option as on card page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.launching_the_application_URL()"
});
formatter.result({
  "duration": 2212677800,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 30371100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts(Facebook_create_sigin_unpaid_stepDefin.java:57)\r\n\tat ✽.And Select product list as Complete ppts.(src/test/resources/FBUser_Create_sigin.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_faceblink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_randamly_the_subscription_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_payment_option_as_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.enter_coupon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.apply_the_cuopon_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.verify_the_applied_coupon_code_offer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.card_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 64,
  "name": "",
  "description": "",
  "id": "create-new-fbuser.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "Launching the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "Select product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "On the Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Open the download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Click on create as account link.",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Click on faceblink.",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "The user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "the randamly the subscription product.",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Select the payment option as CARD is given.",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Place order the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Verify the payment option as on card page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.launching_the_application_URL()"
});
formatter.result({
  "duration": 2258279400,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 16539000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts(Facebook_create_sigin_unpaid_stepDefin.java:57)\r\n\tat ✽.And Select product list as Complete ppts.(src/test/resources/FBUser_Create_sigin.feature:66)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_faceblink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_randamly_the_subscription_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_payment_option_as_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.card_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/Facebook_Sigin_Unpaid_User.feature");
formatter.feature({
  "line": 2,
  "name": "Sign with new facebook user.",
  "description": "",
  "id": "sign-with-new-facebook-user.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Fbuser_unpaid_user"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Sign in the application with facebook user.",
  "description": "",
  "id": "sign-with-new-facebook-user.;sign-in-the-application-with-facebook-user.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Go to the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select a product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Project Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on fblink.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Facebook user enter a email as.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Facebook user enter password.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Login the application.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "See that user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Subscribe the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify the payment section information.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.navigates_to_website_url()"
});
formatter.result({
  "duration": 2118476100,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_most_download()"
});
formatter.result({
  "duration": 2078271100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_signin_Unpaid_stepDefinition.click_most_download(Facebook_signin_Unpaid_stepDefinition.java:56)\r\n\tat ✽.And Select a product list as Complete ppts.(src/test/resources/Facebook_Sigin_Unpaid_User.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.enter_user_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.enter_user_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.after_signup_redirect_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_any_of_price_subscription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.verify_the_payment_option_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "sign-with-new-facebook-user.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Go to the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Select a product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Project Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on fblink.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "See that user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Subscribe the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Verify the by default payment option as paypal.",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Enter the coupon as showing.",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Apply coupon the code.",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify the apply code is applied.",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Go to payement page.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Verify the payment page is payapal.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.navigates_to_website_url()"
});
formatter.result({
  "duration": 2188293100,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_most_download()"
});
formatter.result({
  "duration": 3318677400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_signin_Unpaid_stepDefinition.click_most_download(Facebook_signin_Unpaid_stepDefinition.java:56)\r\n\tat ✽.And Select a product list as Complete ppts.(src/test/resources/Facebook_Sigin_Unpaid_User.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.after_signup_redirect_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_any_of_price_subscription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.see_default_payment_option_as_paypal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.enter_coupon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.apply_the_cuopon_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.verify_the_applied_coupon_code_offer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.verify_the_paypal_payement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "",
  "description": "",
  "id": "sign-with-new-facebook-user.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "Go to the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Select a product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on Project Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click on fblink.",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "See that user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Subscribe the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify the by default payment option as paypal.",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Go to payement page.",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Verify the payment page is payapal.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.navigates_to_website_url()"
});
formatter.result({
  "duration": 3182986600,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_most_download()"
});
formatter.result({
  "duration": 2182942000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_signin_Unpaid_stepDefinition.click_most_download(Facebook_signin_Unpaid_stepDefinition.java:56)\r\n\tat ✽.And Select a product list as Complete ppts.(src/test/resources/Facebook_Sigin_Unpaid_User.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.after_signup_redirect_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_any_of_price_subscription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.see_default_payment_option_as_paypal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.verify_the_paypal_payement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "",
  "description": "",
  "id": "sign-with-new-facebook-user.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "Go to the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Select a product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Click on Project Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click on download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click on fblink.",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "See that user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Subscribe the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Select the payment option as CARD.",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Enter the coupon as showing.",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Apply coupon the code.",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Verify the apply code is applied.",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Go to payement page.",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Verify the payment page is card chekout.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.navigates_to_website_url()"
});
formatter.result({
  "duration": 2156348800,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_most_download()"
});
formatter.result({
  "duration": 3390725000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_signin_Unpaid_stepDefinition.click_most_download(Facebook_signin_Unpaid_stepDefinition.java:56)\r\n\tat ✽.And Select a product list as Complete ppts.(src/test/resources/Facebook_Sigin_Unpaid_User.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.after_signup_redirect_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_any_of_price_subscription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_payment_option_as_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.enter_coupon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.apply_the_cuopon_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.verify_the_applied_coupon_code_offer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.card_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 62,
  "name": "",
  "description": "",
  "id": "sign-with-new-facebook-user.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 63,
  "name": "Go to the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "Select a product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Click on Project Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click on download presentation link.",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Click on fblink.",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "See that user is redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Subscribe the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Select the payment option as CARD.",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Go to payement page.",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Verify the payment page is card chekout.",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.navigates_to_website_url()"
});
formatter.result({
  "duration": 2105917200,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_most_download()"
});
formatter.result({
  "duration": 2078959100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_signin_Unpaid_stepDefinition.click_most_download(Facebook_signin_Unpaid_stepDefinition.java:56)\r\n\tat ✽.And Select a product list as Complete ppts.(src/test/resources/Facebook_Sigin_Unpaid_User.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.after_signup_redirect_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_any_of_price_subscription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.select_payment_option_as_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.card_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/ForgotPassword.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the forgot password.",
  "description": "",
  "id": "verify-the-forgot-password.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@forgotTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test the forgot password.",
  "description": "",
  "id": "verify-the-forgot-password.;test-the-forgot-password.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "To the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select on Complete ppts CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Select as a Project Scoping Powerpoint.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on download link cta.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on forgot password link.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the user email address is registerd as \"\u003cEmail Address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on submit button.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify \"\u003cEmail AddressVal\u003e\" the validation message.",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "verify-the-forgot-password.;test-the-forgot-password.;",
  "rows": [
    {
      "cells": [
        "Email Address",
        "Email AddressVal"
      ],
      "line": 13,
      "id": "verify-the-forgot-password.;test-the-forgot-password.;;1"
    },
    {
      "cells": [
        "",
        "This is a required field."
      ],
      "line": 14,
      "id": "verify-the-forgot-password.;test-the-forgot-password.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Test the forgot password.",
  "description": "",
  "id": "verify-the-forgot-password.;test-the-forgot-password.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@forgotTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "To the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select on Complete ppts CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Select as a Project Scoping Powerpoint.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on download link cta.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on forgot password link.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the user email address is registerd as \"\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on submit button.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify \"This is a required field.\" the validation message.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.navigates_to_website_url()"
});
formatter.result({
  "duration": 3215025200,
  "status": "passed"
});
formatter.match({
  "location": "Forgotpassword.click_most_download()"
});
formatter.result({
  "duration": 31208000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Forgotpassword.click_most_download(Forgotpassword.java:51)\r\n\tat ✽.And Select on Complete ppts CTA.(src/test/resources/ForgotPassword.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Forgotpassword.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Forgotpassword.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Forgotpassword.google_create()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "Forgotpassword.user_mail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Forgotpassword.enter_user_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "Forgotpassword.password_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "",
  "description": "",
  "id": "verify-the-forgot-password.;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "To the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Select on Complete ppts CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select as a Project Scoping Powerpoint.",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on download link cta.",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on forgot password link.",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter the user email address is registerd as \"\u003cEmail Address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on submit button.",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "\"\u003cpassword SendVal\u003e\" validation message.",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "verify-the-forgot-password.;;",
  "rows": [
    {
      "cells": [
        "Email Address",
        "password SendVal"
      ],
      "line": 25,
      "id": "verify-the-forgot-password.;;;1"
    },
    {
      "cells": [
        "test.shadab@gmail.com",
        "If there is an account associated with test.shadab@gmail.com you will receive an email with a link to reset your password."
      ],
      "line": 26,
      "id": "verify-the-forgot-password.;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "",
  "id": "verify-the-forgot-password.;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@forgotTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "To the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Select on Complete ppts CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select as a Project Scoping Powerpoint.",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on download link cta.",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on forgot password link.",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter the user email address is registerd as \"test.shadab@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on submit button.",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "\"If there is an account associated with test.shadab@gmail.com you will receive an email with a link to reset your password.\" validation message.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.navigates_to_website_url()"
});
formatter.result({
  "duration": 2202527200,
  "status": "passed"
});
formatter.match({
  "location": "Forgotpassword.click_most_download()"
});
formatter.result({
  "duration": 15920900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Forgotpassword.click_most_download(Forgotpassword.java:51)\r\n\tat ✽.And Select on Complete ppts CTA.(src/test/resources/ForgotPassword.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Forgotpassword.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Forgotpassword.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Forgotpassword.google_create()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test.shadab@gmail.com",
      "offset": 46
    }
  ],
  "location": "Forgotpassword.user_mail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Forgotpassword.enter_user_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "If there is an account associated with test.shadab@gmail.com you will receive an email with a link to reset your password.",
      "offset": 1
    }
  ],
  "location": "Forgotpassword.Verify_user_send_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/Google_Plus(+)_Create_Singin_unpaid.feature");
formatter.feature({
  "line": 2,
  "name": "google plus user.",
  "description": "",
  "id": "google-plus-user.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Google_plus_create"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "google plus user signin the app.",
  "description": "",
  "id": "google-plus-user.;google-plus-user-signin-the-app.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "launch application.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Project list as Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "go to download link.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Create account cta.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "then click on Google plus link button.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter a email.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Go to next page.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter password.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on next button.",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Subscribe randomly the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the payment information is verify.",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.navigates_to_website_url()"
});
formatter.result({
  "duration": 2115515400,
  "status": "passed"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_most_download()"
});
formatter.result({
  "duration": 2095115000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Google_plus_create_unpaid_defination.click_most_download(Google_plus_create_unpaid_defination.java:56)\r\n\tat ✽.And the product list as Complete ppts.(src/test/resources/Google_Plus(+)_Create_Singin_unpaid.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.create_accuont()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.enter_user_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.password_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.enter_user_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.after_signup_redirect_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.select_any_of_price_subscription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.verify_the_payment_option_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "",
  "id": "google-plus-user.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "launch application.",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Project list as Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "go to download link.",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on Create account cta.",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "then click on Google plus link button.",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Subscribe randomly the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "then default payment option is paypal.",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "insert coupon as display in screen.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "apply coupon cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Verify the apply coupon code text is appeared.",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Go to checkout payement process page.",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Verify the payment screen is paypal is dispalyed.",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.navigates_to_website_url()"
});
formatter.result({
  "duration": 2176445000,
  "status": "passed"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_most_download()"
});
formatter.result({
  "duration": 2095899800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Google_plus_create_unpaid_defination.click_most_download(Google_plus_create_unpaid_defination.java:56)\r\n\tat ✽.And the product list as Complete ppts.(src/test/resources/Google_Plus(+)_Create_Singin_unpaid.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.create_accuont()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.after_signup_redirect_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.select_any_of_price_subscription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.see_default_payment_option_as_paypal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.enter_coupon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.apply_the_cuopon_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.verify_the_applied_coupon_code_offer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.verify_the_paypal_payement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "",
  "description": "",
  "id": "google-plus-user.;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "launch application.",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Project list as Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "go to download link.",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click on Create account cta.",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "then click on Google plus link button.",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Subscribe randomly the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "then default payment option is paypal.",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Go to checkout payement process page.",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Verify the payment screen is paypal is dispalyed.",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.navigates_to_website_url()"
});
formatter.result({
  "duration": 2201313900,
  "status": "passed"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_most_download()"
});
formatter.result({
  "duration": 2050727000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#new-menu\u003eli:nth-child(3)\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63817}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 140c1c3d30c4e28544f79c7d9c8035f6\n*** Element info: {Using\u003dcss selector, value\u003d#new-menu\u003eli:nth-child(3)}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Google_plus_create_unpaid_defination.click_most_download(Google_plus_create_unpaid_defination.java:56)\r\n\tat ✽.And the product list as Complete ppts.(src/test/resources/Google_Plus(+)_Create_Singin_unpaid.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.create_accuont()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.after_signup_redirect_to_price_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.select_any_of_price_subscription()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.see_default_payment_option_as_paypal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_on_place_order_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.verify_the_paypal_payement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 49,
  "name": "On the card page with apply coupon code",
  "description": "",
  "id": "google-plus-user.;on-the-card-page-with-apply-coupon-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "launch application.",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "the product list as Complete ppts.",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Project list as Scoping Powerpoint product.",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "go to download link.",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Click on Create account cta.",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "then click on Google plus link button.",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Redirected to price page.",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Subscribe randomly the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Click on card radio button.",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "insert coupon as display in screen.",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "apply coupon cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Verify the apply coupon code text is appeared.",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Go to checkout payement process page.",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Verify the payment page is secure card 2checkout title.",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.navigates_to_website_url()"
});
formatter.result({
  "duration": 5545707700,
  "status": "passed"
});
formatter.match({
  "location": "Google_plus_create_unpaid_defination.click_most_download()"
});
