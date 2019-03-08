import { browser, by, element } from 'protractor';

export class TestingMethods {
  navigateTo(path: string) {
    return browser.get(path);
  }

  getParagraphTextByCss(selector: string) {
    return element(by.css(selector)).getText();
  }

  getElementValueById(selector) {
    return element(by.id(selector)).getText();
  }

  setTheValueOfElement(selector, value) {
    element(by.id(selector)).sendKeys(value);
  }

  isElementDisplayed(selector) {
    return element(by.id(selector)).isDisplayed();
  }

  clickOnElement(selector) {
    element(by.id(selector)).click();
  }

  getNumberElements(selector: string) {
    return element.all(by.css(selector)).count();
  }
}
