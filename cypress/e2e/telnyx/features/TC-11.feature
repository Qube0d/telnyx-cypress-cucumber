Feature: Test case (TC-11)
    Scenario: Check button "See all Products" from header



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        When I moved on "Products" blog I see drop down menu
        Then I click on "See all products" button
        And I moved too new URL
