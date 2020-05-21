import {Given, When, Then} from 'cucumber';
import register from '../pageobjects/register.page';
import login from '../pageobjects/login.page';


//Register
When('I click the Register link', function() {
    register.clickRegisterLink();
});

When(/^I enter valid credentials into the input fields "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, function(fName, lName, username, password) {
    register.fillOutFields(fName, lName, username, password);
});

When('I click the Register button', function() {
    register.clickRegisterButton();
});


//Login
When(/^I enter valid credentials into the Username "([^"]*)" and Password "([^"]*)" fields$/, function(username, password) {
    register.fillOutInputFields(username, password);
});

When('I click the Login button', function() {
    register.clickLoginButton();
})