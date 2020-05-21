import { Then } from 'cucumber';
import register from '../pageobjects/register.page';
import login from '../pageobjects/login.page';

//Register
Then('I should be redirected to the login page', function () {
  register.returnToLogin();
});

Then('I should see a success message', function () {
  register.registerSuccess();
});


//Login
Then('I should see a message saying that I have logged in with React', function() {
  login.successMessageDisplayed();
});

Then('I should see the Logout link', function() {
  login.logoutLinkDisplayed();
});