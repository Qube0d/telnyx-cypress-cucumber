Feature: Test case (TC-10)
    Scenario: Check Twitter link from footer



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I scroll to footer block
        And I click on "Follow on Twitter"
        Then I redirected to Twitter page and check URL