Feature: Test case (TC-6)
    Scenario: Check registration without entering any cred



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I click "Sign up" button
        When I will be redirected to "Sign up" page
        And I check title of page
        Then I click on "Create account" button
        And I check email alert message
        Then I check message errore