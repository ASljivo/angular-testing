import { browser } from 'protractor';

import { TestingMethods } from './testing-methods.po';

describe('Search item service test:', () => {
  let test: TestingMethods;

  beforeEach(() => {
    test = new TestingMethods();
  });

  it('should navigate to search item service', () => {
    test.navigateTo('/search-item-service');
    browser.sleep(1000);
    expect(test.getParagraphTextByCss('h2')).toEqual('Search service example');
  });

  it('should check if articles is displayed', () => {
    browser.sleep(7000);
    expect(test.getNumberElements('.article')).toBe(20);
  });
});
