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
        super.open('')       //this will append `contact-us` to the baseUrl to form complete URL
        browser.pause(2000);
    }

    clickRegisterLink() {
      this.registerLink.click();
    }

    fillOutFields(fName, lName, username, password) {
      this.firstNameField.setValue(fName);
      this.lastNameField.setValue(lName);
      this.usernameField.setValue(username);
      this.passwordField.setValue(password);
    }

    clickRegisterButton() {
      this.registerButton.click();
    }

    registerSuccess() {
      this.successMessage.waitForDisplayed(5000);
      return this.successMessage.isDisplayed();
    }

    returnToLogin() {
      browser.pause(2000);
      return browser.getUrl().should.equal('http://localhost:8080/login');
    }
/*
    waitForAccountPageToLoad () {
      if(!this.accountMessage.isDisplayed()){
        this.accountMessage.waitForDisplayed(5000);
      }
    }
    getUserInfo (){
      return this.accountMessage.getText();
    }
    */
}

export default new Register()
