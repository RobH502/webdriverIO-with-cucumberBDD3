import { Given} from 'cucumber';
import register from '../pageobjects/register.page';
import yahooPage from '../pageobjects/yahoo-search.page';


// *** belongs to Yahoo serch feature
Given('I am on the site', function() {
  register.open();
})
