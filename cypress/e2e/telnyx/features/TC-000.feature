Feature: Test case 000 (TC-000)

    Scenario: Visit page "Support Center" from footer of main page

        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I scroll down main page too footer
        And I click on "Support Center"
        Then I check title of the page
        And I go back too main page
