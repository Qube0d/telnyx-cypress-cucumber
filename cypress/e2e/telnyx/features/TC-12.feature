Feature: Test case (TC-12)
    Scenario: Check button "See all Pricing" from header



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        When I moved on "Pricing" blog I see drop down menu
        Then I click on "See all pricing" button
        And I moved too new URL