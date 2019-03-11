import { browser, element, by } from 'protractor';
import { TestingMethods } from './testing-methods.po';

describe('Hover directive test:', () => {
  let test: TestingMethods;

  beforeEach(() => {
    test = new TestingMethods();
  });

  it('should navigate to hover directive page', () => {
    test.navigateTo('/hover-directive');
    browser.sleep(1000);
    expect(test.getParagraphTextByCss('h2')).toEqual('Directive example');
  });

  it('should check hover effect on input', () => {
    browser
      .actions()
      .mouseMove(element(by.id('blueFocusedField')))
      .perform();

    expect(
      element(by.id('blueFocusedField')).getCssValue('background-color')
    ).toBe('rgba(0, 0, 255, 1)');

    test.setTheValueOfElement('blueFocusedField', 'testing');
    browser.sleep(1000);
  });
});
