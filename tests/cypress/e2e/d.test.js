describe("d", { tags: ["@core"] }, () => {
  it("core", { tags: ["@other"] }, () => {
    cy.log("dummy test");
  });

  it("also core", () => {
    cy.log("dummy test");
  });
});
