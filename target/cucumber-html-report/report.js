$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Signup.feature");
formatter.feature({
  "line": 2,
  "name": "signup Test On Web Application",
  "description": "",
  "id": "signup-test-on-web-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@signupTest_1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigates to website url.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Most Downloaded link.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Select a product items.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Download this presentation link.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on Create an Account CTA.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.navigates_to_website_url()"
});
formatter.result({
  "duration": 9008795600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_most_download()"
});
formatter.result({
  "duration": 3488231800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.select_product()"
});
formatter.result({
  "duration": 3503559200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Download_this_presentation_link()"
});
formatter.result({
  "duration": 2955742700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.reate_an_Account_CTA()"
});
formatter.result({
  "duration": 2685153100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Data driving for invalid data for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Enter Email Address as \"\u003cEmail Address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter First Name as \"\u003cFirst Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Last Name as \"\u003cLast Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter Password as \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter Confirm password as \"\u003cConfirm_password\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify \"\u003cEmail AddressVal\u003e\" validation message for Email Address.",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify \"\u003cFirst NameVal\u003e\" validation message for First Name.",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify \"\u003cLast NameVal\u003e\" validation message forLast Name.",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify \"\u003cPasswordVal\u003e\" validation message for Password.",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify \"\u003cConfirm_passwordVal\u003e\" validation message for Confirm_password.",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify \"\u003cSignUp_val_Msg\u003e\" message for all invalid credentials.",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;",
  "rows": [
    {
      "cells": [
        "Email Address",
        "First Name",
        "Last Name",
        "Password",
        "Confirm_password",
        "Email AddressVal",
        "First NameVal",
        "Last NameVal",
        "PasswordVal",
        "Confirm_passwordVal",
        "SignUp_val_Msg"
      ],
      "line": 26,
      "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "This is a required field.",
        "This is a required field.",
        "This is a required field.",
        "This is a required field.",
        "This is a required field.",
        ""
      ],
      "line": 27,
      "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;2"
    },
    {
      "cells": [
        "selenium.testing1234@gmail.com",
        "Test",
        "",
        "",
        "",
        "",
        "",
        "This is a required field.",
        "This is a required field.",
        "This is a required field.",
        ""
      ],
      "line": 28,
      "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;3"
    },
    {
      "cells": [
        "selenium.testing1234@gmail.com",
        "Test",
        "Test",
        "",
        "",
        "",
        "",
        "",
        "This is a required field.",
        "This is a required field.",
        ""
      ],
      "line": 29,
      "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;4"
    },
    {
      "cells": [
        "selenium.testing1234@gmail.com",
        "Test",
        "Test",
        "1234",
        "",
        "",
        "",
        "",
        "Please enter 6 or more characters. Leading or trailing spaces will be ignored.",
        "This is a required field.",
        ""
      ],
      "line": 30,
      "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;5"
    },
    {
      "cells": [
        "selenium.testing1234@gmail.com",
        "Test",
        "Test",
        "123456",
        "654221",
        "",
        "",
        "",
        "",
        "Please make sure your passwords match.",
        ""
      ],
      "line": 31,
      "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;6"
    },
    {
      "cells": [
        "selenium.testing1234@gmail.com",
        "Test",
        "Test",
        "123456",
        "123456",
        "",
        "",
        "",
        "",
        "",
        "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account."
      ],
      "line": 32,
      "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Data driving for invalid data for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Enter Email Address as \"\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter First Name as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Last Name as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter Password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter Confirm password as \"\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify \"This is a required field.\" validation message for Email Address.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify \"This is a required field.\" validation message for First Name.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify \"This is a required field.\" validation message forLast Name.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify \"This is a required field.\" validation message for Password.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify \"This is a required field.\" validation message for Confirm_password.",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify \"\" message for all invalid credentials.",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.enter_Email_Address_as(String)"
});
formatter.result({
  "duration": 191444800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "SignUp_Step.enter_First_Name_as(String)"
});
formatter.result({
  "duration": 153110200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.enter_Last_Name_as(String)"
});
formatter.result({
  "duration": 175653000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.enter_password(String)"
});
formatter.result({
  "duration": 1209768200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "SignUp_Step.enter_Confirm_password_as(String)"
});
formatter.result({
  "duration": 151861300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.enter_the_captcha()"
});
formatter.result({
  "duration": 192021500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Signup_button()"
});
formatter.result({
  "duration": 2192853400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 2054678600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 77885200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_forLast_Name(String)"
});
formatter.result({
  "duration": 58675200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_password(String)"
});
formatter.result({
  "duration": 20071821200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Confirm_password(String)"
});
formatter.result({
  "duration": 20043649400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.message_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 20061521700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Data driving for invalid data for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Enter Email Address as \"selenium.testing1234@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter First Name as \"Test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Last Name as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter Password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter Confirm password as \"\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify \"This is a required field.\" validation message forLast Name.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify \"This is a required field.\" validation message for Password.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify \"This is a required field.\" validation message for Confirm_password.",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify \"\" message for all invalid credentials.",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "selenium.testing1234@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.enter_Email_Address_as(String)"
});
formatter.result({
  "duration": 4056765200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 21
    }
  ],
  "location": "SignUp_Step.enter_First_Name_as(String)"
});
formatter.result({
  "duration": 191903800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.enter_Last_Name_as(String)"
});
formatter.result({
  "duration": 130880200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.enter_password(String)"
});
formatter.result({
  "duration": 1174075700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "SignUp_Step.enter_Confirm_password_as(String)"
});
formatter.result({
  "duration": 192994600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.enter_the_captcha()"
});
formatter.result({
  "duration": 198509600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Signup_button()"
});
formatter.result({
  "duration": 2127896100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 2059699900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 62862400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_forLast_Name(String)"
});
formatter.result({
  "duration": 77028200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_password(String)"
});
formatter.result({
  "duration": 20019742100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Confirm_password(String)"
});
formatter.result({
  "duration": 20044405000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.message_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 20076714500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Data driving for invalid data for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Enter Email Address as \"selenium.testing1234@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter First Name as \"Test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Last Name as \"Test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter Password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter Confirm password as \"\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify \"\" validation message forLast Name.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify \"This is a required field.\" validation message for Password.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify \"This is a required field.\" validation message for Confirm_password.",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify \"\" message for all invalid credentials.",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "selenium.testing1234@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.enter_Email_Address_as(String)"
});
formatter.result({
  "duration": 356970000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 21
    }
  ],
  "location": "SignUp_Step.enter_First_Name_as(String)"
});
formatter.result({
  "duration": 2109127600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.enter_Last_Name_as(String)"
});
formatter.result({
  "duration": 146082900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.enter_password(String)"
});
formatter.result({
  "duration": 1148484100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "SignUp_Step.enter_Confirm_password_as(String)"
});
formatter.result({
  "duration": 141573300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.enter_the_captcha()"
});
formatter.result({
  "duration": 164458400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Signup_button()"
});
formatter.result({
  "duration": 2144740300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 2075310200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 78101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_forLast_Name(String)"
});
formatter.result({
  "duration": 93352300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_password(String)"
});
formatter.result({
  "duration": 20019932600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Confirm_password(String)"
});
formatter.result({
  "duration": 20035221000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.message_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 20054452700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Data driving for invalid data for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Enter Email Address as \"selenium.testing1234@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter First Name as \"Test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Last Name as \"Test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter Password as \"1234\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter Confirm password as \"\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify \"\" validation message forLast Name.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify \"Please enter 6 or more characters. Leading or trailing spaces will be ignored.\" validation message for Password.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify \"This is a required field.\" validation message for Confirm_password.",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify \"\" message for all invalid credentials.",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "selenium.testing1234@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.enter_Email_Address_as(String)"
});
formatter.result({
  "duration": 309516400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 21
    }
  ],
  "location": "SignUp_Step.enter_First_Name_as(String)"
});
formatter.result({
  "duration": 166719700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.enter_Last_Name_as(String)"
});
formatter.result({
  "duration": 143556700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.enter_password(String)"
});
formatter.result({
  "duration": 1189249600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "SignUp_Step.enter_Confirm_password_as(String)"
});
formatter.result({
  "duration": 142878200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.enter_the_captcha()"
});
formatter.result({
  "duration": 177599000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Signup_button()"
});
formatter.result({
  "duration": 2147204200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 2076888200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 78209500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_forLast_Name(String)"
});
formatter.result({
  "duration": 48761200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter 6 or more characters. Leading or trailing spaces will be ignored.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_password(String)"
});
formatter.result({
  "duration": 58950300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Confirm_password(String)"
});
formatter.result({
  "duration": 20054854000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.message_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 20010586100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Data driving for invalid data for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Enter Email Address as \"selenium.testing1234@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter First Name as \"Test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Last Name as \"Test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter Password as \"123456\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter Confirm password as \"654221\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify \"\" validation message forLast Name.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify \"\" validation message for Password.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify \"Please make sure your passwords match.\" validation message for Confirm_password.",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify \"\" message for all invalid credentials.",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "selenium.testing1234@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.enter_Email_Address_as(String)"
});
formatter.result({
  "duration": 5292635800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 21
    }
  ],
  "location": "SignUp_Step.enter_First_Name_as(String)"
});
formatter.result({
  "duration": 5190935600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.enter_Last_Name_as(String)"
});
formatter.result({
  "duration": 5229166600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.enter_password(String)"
});
formatter.result({
  "duration": 6203011900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "654221",
      "offset": 27
    }
  ],
  "location": "SignUp_Step.enter_Confirm_password_as(String)"
});
formatter.result({
  "duration": 5243830000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.enter_the_captcha()"
});
formatter.result({
  "duration": 5220778800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Signup_button()"
});
formatter.result({
  "duration": 2212315000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 2090055100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 62910000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_forLast_Name(String)"
});
formatter.result({
  "duration": 91133800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_password(String)"
});
formatter.result({
  "duration": 78827200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please make sure your passwords match.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Confirm_password(String)"
});
formatter.result({
  "duration": 20051646800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.message_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 20045519500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Data driving for invalid data for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-invalid-data-for-sign-up.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Enter Email Address as \"selenium.testing1234@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter First Name as \"Test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Last Name as \"Test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter Password as \"123456\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter Confirm password as \"123456\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify \"\" validation message forLast Name.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify \"\" validation message for Password.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify \"\" validation message for Confirm_password.",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify \"There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.\" message for all invalid credentials.",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "selenium.testing1234@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.enter_Email_Address_as(String)"
});
formatter.result({
  "duration": 5268147500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 21
    }
  ],
  "location": "SignUp_Step.enter_First_Name_as(String)"
});
formatter.result({
  "duration": 5196028000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.enter_Last_Name_as(String)"
});
formatter.result({
  "duration": 5236777000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.enter_password(String)"
});
formatter.result({
  "duration": 6220957700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 27
    }
  ],
  "location": "SignUp_Step.enter_Confirm_password_as(String)"
});
formatter.result({
  "duration": 5255358400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.enter_the_captcha()"
});
formatter.result({
  "duration": 5180254700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Signup_button()"
});
formatter.result({
  "duration": 3368345500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 20068957000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 20045007200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_forLast_Name(String)"
});
formatter.result({
  "duration": 20042420400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_password(String)"
});
formatter.result({
  "duration": 20060815000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.verify_validation_message_for_Confirm_password(String)"
});
formatter.result({
  "duration": 20061379000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.",
      "offset": 8
    }
  ],
  "location": "SignUp_Step.message_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 69682800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Data driving for valid sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Enter Email \"\u003cEmail Address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Enter First Name as \"\u003cFirst Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Enter Last Name as \"\u003cLast Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Enter Password as \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Enter Confirm password as \"\u003cConfirm_password\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.;",
  "rows": [
    {
      "cells": [
        "Email Address",
        "First Name",
        "Last Name",
        "Password",
        "Confirm_password"
      ],
      "line": 43,
      "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.;;1"
    },
    {
      "cells": [
        "selenium.testing",
        "Test",
        "Test",
        "123456",
        "123456"
      ],
      "line": 44,
      "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Data driving for valid sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Enter Email \"selenium.testing\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Enter First Name as \"Test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Enter Last Name as \"Test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Enter Password as \"123456\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Enter Confirm password as \"123456\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "selenium.testing",
      "offset": 13
    }
  ],
  "location": "SignUp_Step.Enter_Email_credentials(String)"
});
formatter.result({
  "duration": 5363207800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 21
    }
  ],
  "location": "SignUp_Step.enter_First_Name_as(String)"
});
formatter.result({
  "duration": 5207341300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.enter_Last_Name_as(String)"
});
formatter.result({
  "duration": 5220116200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.enter_password(String)"
});
formatter.result({
  "duration": 6217007500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 27
    }
  ],
  "location": "SignUp_Step.enter_Confirm_password_as(String)"
});
formatter.result({
  "duration": 5218030500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.enter_the_captcha()"
});
formatter.result({
  "duration": 5189051700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Signup_button()"
});
formatter.result({
  "duration": 2180279000,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "After signup see the price page.",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "Select price subscription.",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Verify the payment option.",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on My account link.",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Click on delete account link.",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Click on Yes button.",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Verify the delete account confirmation message.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.verify_the_price_page()"
});
formatter.result({
  "duration": 1188701500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.select_price_subscription()"
});
formatter.result({
  "duration": 9951740400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.payement_option()"
});
formatter.result({
  "duration": 4092768100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.my_account_link()"
});
formatter.result({
  "duration": 9108335500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.delete_account_link()"
});
formatter.result({
  "duration": 8264396000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.confirm_yes_()"
});
formatter.result({
  "duration": 10131284300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.delete_confirmation_message()"
});
formatter.result({
  "duration": 2116584200,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@signupTest_select_paypal_payement_option"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "Navigates to website url.",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Click on Most Downloaded link.",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Select a product items.",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Click on Download this presentation link.",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Click on Create an Account CTA.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.navigates_to_website_url()"
});
formatter.result({
  "duration": 43801183600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_most_download()"
});
formatter.result({
  "duration": 7884655400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.select_product()"
});
formatter.result({
  "duration": 8130038000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Download_this_presentation_link()"
});
formatter.result({
  "duration": 5953075300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.reate_an_Account_CTA()"
});
formatter.result({
  "duration": 8067615400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Data driving for valid sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@signupTest_select_paypal_payement_option"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "Enter Email \"\u003cEmail Address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Enter First Name as \"\u003cFirst Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Enter Last Name as \"\u003cLast Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Enter Password as \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Enter Confirm password as \"\u003cConfirm_password\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.;",
  "rows": [
    {
      "cells": [
        "Email Address",
        "First Name",
        "Last Name",
        "Password",
        "Confirm_password"
      ],
      "line": 72,
      "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.;;1"
    },
    {
      "cells": [
        "selenium.testing",
        "Test",
        "Test",
        "123456",
        "123456"
      ],
      "line": 73,
      "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 73,
  "name": "Data driving for valid sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-valid-sign-up.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    },
    {
      "line": 62,
      "name": "@signupTest_select_paypal_payement_option"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "Enter Email \"selenium.testing\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Enter First Name as \"Test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Enter Last Name as \"Test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Enter Password as \"123456\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Enter Confirm password as \"123456\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Enter the captcha.",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "click on Signup button.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "selenium.testing",
      "offset": 13
    }
  ],
  "location": "SignUp_Step.Enter_Email_credentials(String)"
});
formatter.result({
  "duration": 5347273600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 21
    }
  ],
  "location": "SignUp_Step.enter_First_Name_as(String)"
});
formatter.result({
  "duration": 5174345200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.enter_Last_Name_as(String)"
});
formatter.result({
  "duration": 5204157200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.enter_password(String)"
});
formatter.result({
  "duration": 6247933600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 27
    }
  ],
  "location": "SignUp_Step.enter_Confirm_password_as(String)"
});
formatter.result({
  "duration": 2036193300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.enter_the_captcha()"
});
formatter.result({
  "duration": 205421800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_Signup_button()"
});
formatter.result({
  "duration": 3837709900,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@signupTest_select_paypal_payement_option"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "After signup see the price page.",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "Select price subscription.",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "Verify the default payment option as paypal.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Enter the coupon code.",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Apply the coupon code as given.",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Verify the applied coupon code.",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "click on place order button.",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "Verify the paypal payement process.",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Navigates to website url home page.",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Click on My account link.",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Click on delete account link.",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Click on Yes button.",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "Verify the delete account confirmation message.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.verify_the_price_page()"
});
formatter.result({
  "duration": 1089746800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.select_price_subscription()"
});
formatter.result({
  "duration": 7514456400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.select_the_default_payment_option_as_paypal()"
});
formatter.result({
  "duration": 1108250300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.Enter_the_coupon_code()"
});
formatter.result({
  "duration": 1171318100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.apply_the_coupon_code()"
});
formatter.result({
  "duration": 2079388900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.applied_coupon_code()"
});
formatter.result({
  "duration": 1059164700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_place_order_cta()"
});
formatter.result({
  "duration": 5108352400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.paypal_payement_place_process_Step()"
});
