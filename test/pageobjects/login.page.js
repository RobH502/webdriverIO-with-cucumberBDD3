import Page from './page';
import utl   from '../../utilities/common-utilities';

class LoginPage extends Page {

    /**
    * define elements
    */

    get usernameInput()   { return $('//input[@name="username"]'); }
    get passwordInput()   { return $('//input[@name="password"]'); }
    get loginButton()     { return $('//button[contains(text(), "Login")]'); }
    get successMessage()  { return $('//p[contains(text(), "logged in with React!!")]') }
    get logoutLink()      { return $('//a[contains(@href, "/login") and contains(text(), "Logout")]'); }

    /**
     * define or overwrite page methods
     */

    //Fill out the "Username" and "Password" fields
    fillOutInputFields(username, password) {
      //this.waitForloginPageToLoad();
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.loginButton.click();
    }

    //Click the "Login" button after filling the "Username" and "Password" fields
    clickLoginButton() {
      this.loginButton.click();
    }

    //Verify that the message "You've logged in with React!!" is displayed upon logging in
    successMessageDisplayed() {
      this.successMessage.waitForDisplayed(5000);
      return this.successMessage.isDisplayed().should.be.true;
    }

    //Verify that the "Logout" link is visible upon loggin in
    logoutLinkDisplayed() {
      this.logoutLink.waitForDisplayed(5000);
      return this.logoutLink.isDisplayed().should.be.true;
    }
}

export default new LoginPage()
