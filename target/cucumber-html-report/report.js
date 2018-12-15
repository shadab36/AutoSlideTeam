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
  "duration": 24076675000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.click_most_download()"
});
formatter.result({
  "duration": 25606850800,
  "status": "passed"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.select_product()"
});
formatter.result({
  "duration": 7527203900,
  "status": "passed"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.click_on_Download_this_presentation_link()"
});
formatter.result({
  "duration": 2404440100,
  "status": "passed"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.fb_link()"
});
formatter.result({
  "duration": 21468682200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with css selector \u003d\u003d .main .inchoo-socialconnect-google-inner\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {acceptInsecureCerts: false, browserName: internet explorer, browserVersion: 11, javascriptEnabled: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:ieOptions: {browserAttachTimeout: 0, elementScrollBehavior: 0, enablePersistentHover: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.fileUploadDialogTimeout: 3000, ie.forceCreateProcessApi: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:43174/, nativeEvents: true, requireWindowFocus: false}, setWindowRect: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 18bea0af-9689-4466-952e-63f60b18fa50\n*** Element info: {Using\u003dcss selector, value\u003d.main .inchoo-socialconnect-google-inner}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.GooglePlus_signin_paid_user_stepDefinitio.fb_link(GooglePlus_signin_paid_user_stepDefinitio.java:87)\r\n\tat ✽.And Click on googlePlus link.(src/test/resources/1Google_Plus_paid_user.feature:8)\r\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 78329700,
  "status": "passed"
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
  "duration": 40059334500,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.click_most_download()"
});
formatter.result({
  "duration": 7076832600,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.select_product()"
});
formatter.result({
  "duration": 5233215500,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.click_on_Download_thist_presentation_link()"
});
formatter.result({
  "duration": 3358324100,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.fb_link()"
});
formatter.result({
  "duration": 4702043100,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.enter_user_mail()"
});
formatter.result({
  "duration": 20094057200,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.enter_user_password()"
});
formatter.result({
  "duration": 20279826200,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.click_on_Login_button()"
});
formatter.result({
  "duration": 60184565800,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_paid_user_stepDefinition.verify_uesr_validation_message_for_Email_Address()"
});
formatter.result({
  "duration": 20264309800,
  "status": "passed"
});
formatter.after({
  "duration": 28300,
  "status": "passed"
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
  "duration": 14838839500,
  "status": "passed"
});
formatter.after({
  "duration": 42400,
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
  "duration": 16118882900,
  "status": "passed"
});
formatter.after({
  "duration": 32800,
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
  "name": "chat window option.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter a user email",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter the user password",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Login cta",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the download this presenetion link is appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.navigates_to_website_url()"
});
formatter.result({
  "duration": 44073215600,
  "status": "passed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.click_most_download()"
});
formatter.result({
  "duration": 16843396000,
  "status": "passed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.select_product()"
});
formatter.result({
  "duration": 4575408300,
  "status": "passed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.click_on_Download_this_presentation_link()"
});
formatter.result({
  "duration": 10670667300,
  "status": "passed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.close_chat_window()"
});
formatter.result({
  "duration": 156638200,
  "status": "passed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.enter_user_email_address_as()"
});
formatter.result({
  "duration": 873658600,
  "status": "passed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.enter_user_password_as()"
});
formatter.result({
  "duration": 733662900,
  "status": "passed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.click_on_Login_button()"
});
formatter.result({
  "duration": 8295086000,
  "status": "passed"
});
formatter.match({
  "location": "Email_Signin_paidUser_stepDefinition.verify_uesr_validation_message_for_Email_Address()"
});
formatter.result({
  "duration": 1155334700,
  "status": "passed"
});
formatter.after({
  "duration": 34700,
  "status": "passed"
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
  "duration": 39713431000,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 13295484500,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "duration": 7936415400,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "duration": 1420937600,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "duration": 20265767200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with css selector \u003d\u003d .buttons-set\u003ebutton[title\u003d\u0027Create an Account\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {acceptInsecureCerts: false, browserName: internet explorer, browserVersion: 11, javascriptEnabled: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:ieOptions: {browserAttachTimeout: 0, elementScrollBehavior: 0, enablePersistentHover: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.fileUploadDialogTimeout: 3000, ie.forceCreateProcessApi: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:43174/, nativeEvents: true, requireWindowFocus: false}, setWindowRect: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 18bea0af-9689-4466-952e-63f60b18fa50\n*** Element info: {Using\u003dcss selector, value\u003d.buttons-set\u003ebutton[title\u003d\u0027Create an Account\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link(Facebook_create_sigin_unpaid_stepDefin.java:81)\r\n\tat ✽.And Click on create as account link.(src/test/resources/FBUser_Create_sigin.feature:8)\r\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 88621000,
  "status": "passed"
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
  "duration": 42349544000,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 14467522400,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "duration": 6358311100,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "duration": 4575167100,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "duration": 5001010900,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_faceblink()"
});
formatter.result({
  "duration": 4061553100,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page()"
});
formatter.result({
  "duration": 47139400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Pricing]\u003e but was:\u003c[Log into Facebook | Facebook]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page(Facebook_create_sigin_unpaid_stepDefin.java:140)\r\n\tat ✽.Then The user is redirected to price page.(src/test/resources/FBUser_Create_sigin.feature:25)\r\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 30095600,
  "status": "passed"
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
  "duration": 46093839800,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 13434866700,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "duration": 6811518400,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "duration": 4780307600,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "duration": 5404985700,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_faceblink()"
});
formatter.result({
  "duration": 4577174100,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page()"
});
formatter.result({
  "duration": 47417400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Pricing]\u003e but was:\u003c[Log into Facebook | Facebook]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page(Facebook_create_sigin_unpaid_stepDefin.java:140)\r\n\tat ✽.Then The user is redirected to price page.(src/test/resources/FBUser_Create_sigin.feature:41)\r\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 30936600,
  "status": "passed"
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
  "duration": 46726949800,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 14372365300,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "duration": 9561236000,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "duration": 5358960700,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "duration": 6076568900,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_faceblink()"
});
formatter.result({
  "duration": 4686465400,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page()"
});
formatter.result({
  "duration": 46944800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Pricing]\u003e but was:\u003c[Log into Facebook | Facebook]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page(Facebook_create_sigin_unpaid_stepDefin.java:140)\r\n\tat ✽.Then The user is redirected to price page.(src/test/resources/FBUser_Create_sigin.feature:55)\r\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 30095800,
  "status": "passed"
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
  "duration": 46789321300,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.select_product_list_as_Complete_ppts()"
});
formatter.result({
  "duration": 16684861600,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.on_the_Scoping_Powerpoint_product()"
});
formatter.result({
  "duration": 7577136700,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.open_the_download_presentation_link()"
});
formatter.result({
  "duration": 5811549500,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_create_as_account_link()"
});
formatter.result({
  "duration": 6014804300,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.click_on_faceblink()"
});
formatter.result({
  "duration": 5061517900,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page()"
});
formatter.result({
  "duration": 46984600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Pricing]\u003e but was:\u003c[Log into Facebook | Facebook]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat TestRunner.loginSteps.Facebook_create_sigin_unpaid_stepDefin.the_user_is_redirected_to_price_page(Facebook_create_sigin_unpaid_stepDefin.java:140)\r\n\tat ✽.Then The user is redirected to price page.(src/test/resources/FBUser_Create_sigin.feature:71)\r\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 30154300,
  "status": "passed"
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
  "duration": 47087645200,
  "status": "passed"
});
formatter.match({
  "location": "Facebook_signin_Unpaid_stepDefinition.click_most_download()"
});
