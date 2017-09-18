import { AppPage } from './app.po';
import { element } from 'protractor';

describe('find-trip App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the page header', () => {
    page.navigateTo();
    expect(page.getHeader()).toEqual('CHECK IN');
  });

  it('should display the page heading', () => {
    page.navigateTo();
    expect(page.getHeading()).toEqual('RETRIEVE YOUR BOOKING');
  });

});
