describe("Auth | Login", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500");

    cy.fixture("auth").then((data) => {
      cy.intercept(
        "https://api.github.com/users/" + data.user.login,
        data.response
      ).as("userInfo");
    });
  });

  it("should login with email and mock server", () => {
    cy.get("#btnGetUser").click();
    cy.get("@userInfo").then(console.log);
  });
});
