/// <reference types="cypress" />

describe("Playing with Cypress", () => {
  it("should contain a title", () => {
    cy.visit("http://127.0.0.1:5500");
    // cy.get("h1").should("contain", "Hackages");

    // tie to the css
    // cy.get("#title").should("have.length", 2);
    cy.get("[data-cy=title]").should("contain", "Hackages");
  });
});
