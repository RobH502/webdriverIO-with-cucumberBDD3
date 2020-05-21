import Page from './page'

class Register extends Page {

    /**
    * define elements
    */


    get registerLink() { return $('//a[contains(@href, "/register")]'); }
    get firstNameField()  { return $('//input[@name="firstName"]'); }
    get lastNameField()   { return $('//input[@name="lastName"]'); }
    get usernameField()   { return $('//input[@name="username"]'); }
    get passwordField()   { return $('//input[@name="password"]'); }
    get registerButton()  { return $('//button[contains(text(), "Register")]'); }
    get successMessage()  { return $('//div[contains(text(), "Registration successful")]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('')
        browser.pause(2000);
    }

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
      this.successMessage.waitForDisplayed(5000);
      return this.successMessage.isDisplayed();
    }
}

export default new Register()
