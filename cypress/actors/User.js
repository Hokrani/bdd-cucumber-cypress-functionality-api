export class User {
  /**
   * Navigate to the URL of the page
   * @param {*} url - URL of the page
   */
  navigateTo = async (url) => {
    await cy.visit(url);
  };

  /**
   *  Type the text in the field
   * @param {*} locator - locator of the element
   * @param {*} enterText - Text to enter in the element
   */
  typeText = async (locator, enterText) => {
    await cy.get(locator).type(enterText);
  };

  /**
   * Click on the element
   * @param {*} locator - locator of the element
   */
  clickElement = async (locator) => {
    await cy.get(locator).click({ force: true });
  };
}
