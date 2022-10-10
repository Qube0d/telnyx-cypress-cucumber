Feature: Test case (TC-5)
    Scenario: Check the "Sign up" button link from footer



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I scroll down main page too footer
        And In footer check button "Sign up" for visible
        Then I click on "Sign up" button
        And I will be redirected to "Sign up" page
        Then I check title of page


