/*
 *TODO:
 * Check the submission
 */

/* global cy */

const user = {
  name: "Faker Name",
  email: "fake_email@email.com",
  password: "pass1234",
};

const invalidUser = {
  name: "",
  email: "trolled",
  password: "pass",
};

describe("Test form input", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should fill out the register form", () => {
    // Name
    cy.get("[custom-stuff='name']")
      .type(user.name)
      .should("have.value", user.name);

    // Email
    cy.get("[custom-stuff='email']")
      .type(user.email)
      .should("have.value", user.email);

    // Password
    cy.get("[custom-stuff='password']")
      .type(user.password)
      .should("have.value", user.password);

    cy.get("[custom-stuff='terms']").check();

    cy.get("[custom-stuff='submit']").should("be.enabled");

    cy.get("button").click();
  });

  it("Button disabled", () => {
    cy.get("[custom-stuff='submit']").should("be.disabled");
  });

  it("Check error handling after interaction w/ form", () => {
    // Name
    cy.get("[custom-stuff='name']").should("have.value", invalidUser.name);

    // Email
    cy.get("[custom-stuff='email']").type(invalidUser.email);

    cy.get("[cy-error='error_email']").should(
      "have.text",
      "must be a valid email"
    );
    // Password
    cy.get("[custom-stuff='password']").type(invalidUser.password);

    cy.get("[cy-error='error_password']").should(
      "have.text",
      "Must be at least 6 chars long."
    );
  });
});
