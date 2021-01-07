// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("search", (searchTerm) => {
  // query search input
  // cy.get(".gLFyf.gsfi").type(searchTerm + "{enter}");
  cy.get(".gLFyf.gsfi").as("searchInput").type(searchTerm);

  // query the search button
  cy.get(".FPdoLc.tfB0Bf")
    .children()
    .children()
    .first()
    .as("searchButton")
    .click();
  // cy.get("div.UUbT9").invoke("show");
  // cy.get(".gNO89b").first().click();
});
