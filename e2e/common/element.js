export function getElement(selector) {
  const element = browser.element(selector);
  try {
    if (!element.isVisible()) {
      element.waitForVisible();
    }
  } catch (err) {
    throw new Error(`Element with selector ${element.selector} is not visible`);
  }

  return element;
}

export function getElements(selector) {
  const element = browser.elements(selector);
  try {
    if (!element.isVisible()) {
      element.waitForVisible();
    }
  } catch (err) {
    throw new Error(`Elements with selector ${element.selector} are not visible`);
  }

  return element;
}
