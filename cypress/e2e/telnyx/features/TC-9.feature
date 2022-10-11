Feature: Test case (TC-9)
    Scenario: Check amount of savings from "Switch + Save"



        Given I go to telnyx.com main page
        And If the cookies modal window is opened I close it
        Then I scroll page to "Switch + Save" block
        And I move slider "Make outbound calls" to "362,000"
        Then I check "Save up per month" value is "2778"

