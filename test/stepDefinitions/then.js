import { Then } from 'cucumber';
import register from '../pageobjects/register.page';
import yahooPage from '../pageobjects/yahoo-search.page';

Then('I should be redirected to the login page', function () {
  register.returnToLogin();
});

// *** belongs to ta-loging  feature
Then('I should see a success message', function () {
  register.registerSuccess();
});
