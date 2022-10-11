Feature: Test case (TC-13)
    Scenario: Check sms pricing for Kyivstar in Ukraine



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        When I moved on "Pricing" blog I see drop down menu
        Then I click on "Sms API" button
        And I choose "Ukraine" from drop down menu
        Then I scroll page to "In-Depth Messaging pricing"
        And I check for Kyivstar
