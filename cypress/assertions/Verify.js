export class Verify {
  /**
   * Checks the title of the page
   * @param {*} expectedTitle - Expected title of the page
   */
  pageTitle = async (expectedTitle) => {
    await cy.title().should("eq", expectedTitle);
  };
}
