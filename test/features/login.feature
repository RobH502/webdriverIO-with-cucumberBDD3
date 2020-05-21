Feature: Logging into the site

    As a user on the site
    I want to login to the site
    Because I want to access my account

    Background:

        Given I am on the site

    Scenario Outline: Logging into a registered account
        When I enter valid credentials into the Username <username> and Password <password> fields
        And I click the Login button
        Then I should see a message saying that I have logged in with React
        And I should see the Logout link

        Examples:
        |userName| |password|
        |"test"| |"password"|