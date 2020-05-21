import Page from './page'

class MyAccount extends Page {

    /**
    * define elements
    */

    get accountMessage () { return $('.text-align-left'); }
    get registerLink() { return $('')}

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('')       //this will append `contact-us` to the baseUrl to form complete URL
        browser.pause(2000);
    }

    clickRegister() {
      
    }

    waitForAccountPageToLoad () {
      if(!this.accountMessage.isDisplayed()){
        this.accountMessage.waitForDisplayed(5000);
      }
    }
    getUserInfo (){
      return this.accountMessage.getText();
    }
}

export default new MyAccount()
