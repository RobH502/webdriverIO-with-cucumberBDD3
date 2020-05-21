Feature: Register an account

    As a user on the website
    I want to register an account
    Because I want to login to the site

    Background:

        Given I am on the site

    Scenario Outline: Create an account
        When I click the Register link
        And I enter valid credentials into the input fields <firstName> <lastName> <userName> <password>
        And I click the Register button
        Then I should be redirected to the login page
        And I should see a success message
        

        Examples:
        |firstName| |lastName| |userName| |password|
        |"Test01"| |"Tester01"| |"test01"| |"password"|