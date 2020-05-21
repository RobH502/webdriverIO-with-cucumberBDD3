Feature: Register an account

    As a user on the website
    I want to register an account
    Because I want to login to the site

    Background:

        Given I am on the site

    Scenario: Access the Register page
        When I click the Register button
        Then I should see the First Name field