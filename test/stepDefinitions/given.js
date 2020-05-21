import { Given} from 'cucumber';
import register from '../pageobjects/register.page';
import login from '../pageobjects/login.page';


//Load the site
Given('I am on the site', function() {
  register.open();
})
