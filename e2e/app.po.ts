import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeader() {
    return element(by.css('.header p')).getText();
  }

  getHeading() {
    return element(by.css('.retrieve-booking-module__heading h1')).getText();
  }

}
