import Page from './page'
import utl   from '../../utilities/common-utilities';

class Register extends Page {

    /**
    * define elements
    */


    //Register page
    get registerLink() { return $('//a[contains(@href, "/register")]'); }
    get firstNameField()  { return $('//input[@name="firstName"]'); }
    get lastNameField()   { return $('//input[@name="lastName"]'); }
    get usernameField()   { return $('//input[@name="username"]'); }
    get passwordField()   { return $('//input[@name="password"]'); }
    get registerButton()  { return $('//button[contains(text(), "Register")]'); }
    get registerSuccessMessage()  { return $('//div[contains(text(), "Registration successful")]'); }

    //Login page
    get usernameInput()   { return $('//input[@name="username"]'); }
    get passwordInput()   { return $('//input[@name="password"]'); }
    get loginButton()     { return $('//button[contains(text(), "Login")]'); }
    get loginSuccessMessage()  { return $('//p[contains(text(), "logged in with React!!")]') }
    get logoutLink()      { return $('//a[contains(@href, "/login") and contains(text(), "Logout")]'); }

    /**
     * define or overwrite page methods
     */
     open () {
        super.open('')
        browser.pause(2000);
    }


    //Register

    //Click the "Register" link on the login page
    clickRegisterLink() {
      this.registerLink.click();
    }

    //Fill out the fields on the Register page
    fillOutFields(fName, lName, username, password) {
      this.firstNameField.setValue(fName);
      this.lastNameField.setValue(lName);
      this.usernameField.setValue(username);
      this.passwordField.setValue(password);
    }

    //Click the "Register" button after filling out the fields above it
    clickRegisterButton() {
      this.registerButton.click();
    }

    //Verify that the user is returned to the login page after completing registration
    returnToLogin() {
      browser.pause(2000);
      return browser.getUrl().should.equal('http://localhost:8080/login');
    }

    //Verify that the registration success message appears
    registerSuccess() {
      this.registerSuccessMessage.waitForDisplayed(5000);
      return this.registerSuccessMessage.isDisplayed();
    }


    //Login

    //Fill out the "Username" and "Password" fields
    fillOutInputFields(username, password) {
      //this.waitForloginPageToLoad();
      this.usernameInput.setValue(username + utl.getTimeStamp().toString());
      this.passwordInput.setValue(password + utl.getTimeStamp().toString());
      this.loginButton.click();
    }

    //Click the "Login" button after filling the "Username" and "Password" fields
    clickLoginButton() {
      this.loginButton.click();
    }

    //Verify that the message "You've logged in with React!!" is displayed upon logging in
    successMessageDisplayed() {
      this.loginSuccessMessage.waitForDisplayed(5000);
      return this.loginSuccessMessage.isDisplayed().should.be.true;
    }

    //Verify that the "Logout" link is visible upon loggin in
    logoutLinkDisplayed() {
      this.logoutLink.waitForDisplayed(5000);
      return this.logoutLink.isDisplayed().should.be.true;
    }
}

export default new Register()
