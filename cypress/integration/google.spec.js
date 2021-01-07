describe("Playing with google.com", () => {
  beforeEach(() => {
    cy.setCookie("CONSENT", "YES+BE.fr+V11+BX");
    cy.visit("/");
    cy.screenshot("init-page");
  });

  // name
  it("should search for anything on Google", () => {
    // Given (initial input)
    const searchTerm = "hackages workshops";

    // When (actions)
    cy.search(searchTerm);
    cy.screenshot("search-results");

    // Then (assertions)
    // url verification
    cy.location().then((data) => {
      expect(data.pathname).contain("search");
      expect(data.search).contain(searchTerm.replace(" ", "+"));
    });
  });
});
