Feature: Test case (TC-7)
    Scenario: Check registration with wrong cred



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I click "Sign up" button
        When I will be redirected to "Sign up" page
        And I check title of page
        Then I fill all fields
        And I click "I want to receive emails"
        Then I click "I agree to the Terms"
        And I click on "Create account" button
        Then I get error alert "Password must have"
