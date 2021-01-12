// JSON PLACEHOLDER TEST
describe("Falcon 5ive API", () => {
  it("Visits JSON", () => {
    cy.request("https://falcon5ives.herokuapp.com/users");
  });
  it("returns a JSON data", () => {
    cy.request("https://falcon5ives.herokuapp.com/users")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });
});
//GET ALL USERS TEST
describe("Users API", () => {
  beforeEach(() =>
    cy.request("https://falcon5ives.herokuapp.com/users").as("users")
  );
  it("should return the correct status code", () => {
    cy.get("@users").its("status").should("be.equal", 200);
  });
  it("should return the correct number of users", () => {
    cy.get("@users").its("body.payload").should("have.length", 5);
  });
});
//PATCH API TEST
describe("Users API - Patch", () => {
  it("marks users profile as completed - different way", () => {
    cy.request({
      method: "PATCH",
      url: "https://falcon5ives.herokuapp.com/users/1",
      body: {
        success: true,
      },
    })
      .its("body")
      .its("success")
      .should("be.equal", true);
  });
});
