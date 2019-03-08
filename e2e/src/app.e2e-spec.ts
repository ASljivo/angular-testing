import { browser } from 'protractor';

import { TestingMethods } from './testing-methods.po';

describe('Workspace project App', () => {
  let test: TestingMethods;

  beforeEach(() => {
    test = new TestingMethods();
  });

  it('should display welcome message', () => {
    test.navigateTo('/');
    browser.sleep(1000);
    expect(test.getParagraphTextByCss('app-root h1')).toEqual(
      'Welcome to Angular testing examples!'
    );
  });
});
