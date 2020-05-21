import {Given, When, Then} from 'cucumber';
import register from '../pageobjects/register.page';
import yahooPage from '../pageobjects/yahoo-search.page';


When('I click the Register link', function() {
    register.clickRegisterLink();
});

When(/^I enter valid credentials into the "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)" fields$/, function(fName, lName, username, password) {
    register.fillOutFields(fName, lName, username, password);
});

When('I click the Register button', function() {
    register.clickRegisterButton();
});