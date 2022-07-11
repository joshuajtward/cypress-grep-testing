describe("c", () => {
  it("core", { tags: ["@core"] }, () => {
    cy.log("dummy test");
  });

  it("not core", () => {
    cy.log("dummy test");
  });
});
