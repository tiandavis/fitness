const app =  "http://localhost:3000/"

describe("Index Page", () => {
  it("successfully loads", () => {
    cy.visit(app)
  })

  it("has the correct title", () => {
    cy.visit(app)
    cy.title().should("include", "Top Exercises · Fitbod")
  })

  it("has the correct heading", () => {
    cy.visit(app)
    cy.get("h1").should("contain", "Top Exercises")
  })

  it("has the correct meta description", () => {
    cy.visit(app)
    cy.get("meta[name='description']").should(
      "have.attr",
      "content",
      "Strength Training Exercises by Fitbod"
    )
  })

  it("has the correct number of exercises", () => {
    cy.visit(app)
    cy.get("[data-testid='exercise']").should("have.length", 5)
  })

  it("has the correct exercise", () => {
    cy.visit(app)
    cy.get("[data-testid='exercise']").first().should("contain", "Landmine Press")
    cy.get("[data-testid='exercise']").first().should("contain", "Shoulders")
  })
})
