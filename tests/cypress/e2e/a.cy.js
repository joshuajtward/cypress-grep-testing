describe("a", () => {
  it("a", { tags: ["@a"] }, () => {
    cy.log("dummy test");
  });

  it("a core", { tags: ["@core"] }, () => {
    cy.log("dummy test");
  });
});
