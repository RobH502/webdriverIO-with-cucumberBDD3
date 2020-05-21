import { Then } from 'cucumber';
import register from '../pageobjects/register.page';
import yahooPage from '../pageobjects/yahoo-search.page';

Then('I should see a list of search results', function () {
  register.firstNameDisplayed();
});

// *** belongs to ta-loging  feature
Then(/^I should see the message "([^"]*)" on my account page$/, function (message) {
  myAccount.getUserInfo().should.equal(message);
});
