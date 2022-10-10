Feature: Test case (TC-4)
    Scenario: Check the "Sign up" button link from header



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then In header check button "Sign up" for visible
        And I click "Sign up" button
        Then I will be redirected to "Sign up" page
        And I check title of page