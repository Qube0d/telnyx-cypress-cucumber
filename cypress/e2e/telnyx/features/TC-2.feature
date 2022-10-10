Feature: Test case (TC-2)
    Scenario: Checking the visibility of the footer "Company" menu items



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I scroll down main page too footer
        And I check if all menu sections have the necessary tabs
