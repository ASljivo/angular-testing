import { browser } from 'protractor';

import { TestingMethods } from './testing-methods.po';

describe('Post component page test:', () => {
  let test: TestingMethods;

  beforeEach(() => {
    test = new TestingMethods();
  });

  it('should navigate to post component page', () => {
    test.navigateTo('/posts-component');
    browser.sleep(1000);
    expect(test.getParagraphTextByCss('h2')).toEqual('Posts example');
  });

  it('should check if articles is displayed', () => {
    browser.sleep(1000);
    expect(test.getNumberElements('.posts')).toBe(100);
  });

  it('should delete last post', () => {
    test.clickOnElement('deletePost99');
    browser.sleep(1000);
    expect(test.getNumberElements('.posts')).toBe(99);
  });
});
