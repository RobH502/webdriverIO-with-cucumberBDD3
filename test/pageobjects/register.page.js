import Page from './page'

class Register extends Page {

    /**
    * define elements
    */


    get registerLink() { return $('//a[contains(@href, "/register")]'); }
    get firstNameField()  {return $('input[@name="firstName"]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('')       //this will append `contact-us` to the baseUrl to form complete URL
        browser.pause(2000);
    }

    clickRegister() {
      this.registerLink.click();
    }

    firstNameDisplayed() {
      this.firstNameField.waitForDisplayed(5000);
      return this.firstNameField.isDisplayed();
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
