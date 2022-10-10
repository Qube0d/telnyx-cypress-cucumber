Feature: Test case 1 (TC-1)
    Scenario: Check the footer LinkedIn link

        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I scroll down main page too footer
        And I click on "LinkedIn" button
        Then I moved to another page and check title of page



