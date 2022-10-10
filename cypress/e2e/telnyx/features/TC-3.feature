Feature: Test case (TC-3)
    Scenario: Check the footer "Resources" block links avalible



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I scroll down main page too footer
        And I click "Developer Docs" button from "Resources" block
        When I moved to "Developer Docs" page and check tittle
        Then I click back button from browser
        When I come back to main page I click "Blog" link from footer
        Then I moved to "Blog" page and check tittle
        And I click back button
        When I come back to main page I click "Resource Hub" link from footer
        Then I moved to "Resource Hub" page and check tittle
        And I click in browser back button
        When I come back to main page I click "Release Notes" link from footer
        Then I moved to page "Release Notes" and check title of page