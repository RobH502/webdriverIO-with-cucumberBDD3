import {Given, When, Then} from 'cucumber';
import register from '../pageobjects/register.page';
import yahooPage from '../pageobjects/yahoo-search.page';


When('I click the Register button', function() {
    register.clickRegister();
})