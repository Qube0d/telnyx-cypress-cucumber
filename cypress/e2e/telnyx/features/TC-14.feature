Feature: Test case (TC-14)
    Scenario: Check blog filter by product



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I scroll to footer block
        And I click "Blog" button
        Then I click on "Messaging" from "Filter by product"
        And I check URL "Messaging"
        Then I click on "Verify API" from "Filter by product"
        And I check URL "Verify API"
        Then I click on "Sip Trunking" from "Filter by product"
        And I check URL "Sip Trunking"
        Then I click on "Fax" from "Filter by product"
        And I check URL "Fax"
        Then I click on "Wireless" from "Filter by product"
        And I check URL "Wireless"