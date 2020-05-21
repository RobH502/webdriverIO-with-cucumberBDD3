import { Given} from 'cucumber';
import register from '../pageobjects/register.page';
import yahooPage from '../pageobjects/yahoo-search.page';


// *** belongs to Yahoo serch feature
Given('I am on the site', function() {
  register.open();
})

Given('I am on the phptravels page', function () {
  // Write code here that turns the phrase above into concrete actions
  loginPage.open();     // navigating to login page
  expect(browser.compareScreen('test',{autoSaveBaseline: true}).misMatchPercentage).equal(0);
});
