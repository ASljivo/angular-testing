import { browser } from 'protractor';

import { TestingMethods } from './testing-methods.po';

describe('Strength pipe test:', () => {
  let test: TestingMethods;

  beforeEach(() => {
    test = new TestingMethods();
  });

  it('should navigate to strength pipe page', () => {
    test.navigateTo('/strength-pipe');
    browser.sleep(1000);
    expect(test.getParagraphTextByCss('h2')).toEqual('Pipe example');
  });

  it('should check pipe output', () => {
    expect(test.getElementValueById('strength8')).toEqual('Power: 8 (weak)');
    browser.sleep(1000);
    expect(test.getElementValueById('strength24')).toEqual(
      'Power: 24 (unbelievable)'
    );
    browser.sleep(1000);
    expect(test.getElementValueById('strength55')).toEqual(
      'Power: 55 (unbelievable)'
    );
    browser.sleep(1000);
  });
});
