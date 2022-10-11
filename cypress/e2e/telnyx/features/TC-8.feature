Feature: Test case (TC-8)
    Scenario: Check link of button "See our Pricing" from network page



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I click "Network" button from header
        And I scroll page to "See our Pricing" button and click on it