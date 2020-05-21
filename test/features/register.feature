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
        |"Test02"| |"Tester02"| |"test02"| |"password"|


        Scenario Outline: Logging into a registered account
        When I enter valid credentials into the Username <username> and Password <password> fields
        And I click the Login button
        Then I should see a message saying that I have logged in with React
        And I should see the Logout link

        Examples:
        |username| |password|
        |"test02"| |"password"|