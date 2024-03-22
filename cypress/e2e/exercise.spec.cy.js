const app =  "http://localhost:3000/"

const visitExercise = () => {
  cy.visit(app)
  cy.get("[data-testid='exercise']").first().click()
  cy.get("h1").should("be.visible")
}

describe("Exercise Page", () => {
  it("renders an exercise", () => {
    visitExercise()
  })

  it("has the correct title", () => {
    visitExercise()
    cy.title().should("include", "Landmine Press · Fitbod")
  })

  it("has the correct heading", () => {
    visitExercise()
    cy.get("h1").should("contain", "Landmine Press")
  })

  it("has the correct image", () => {
    visitExercise()
    cy.get("[data-testid='exercise-image']").should("be.visible")
    cy.get("[data-testid='exercise-image']").should("have.attr", "alt", "Landmine Press")
  })

  it("can add a set", () => {
    visitExercise()

    cy.get("form").within(() => {
      cy.get("#reps").type("10")
      cy.get("#weight").type("50")
      cy.get("button[type='submit']").click()
    })

    cy.get("[data-testid='performances']").should("be.visible")

    cy.get("[data-testid='performance']").should("have.length", 1)
    cy.get("[data-testid='set']").should("have.length", 1)

    const today = new Date().toLocaleDateString()
    cy.get("[data-testid='day']").should("contain", today)

    cy.get("[data-testid='reps-by-weight']").should("contain", "10 x 50 lb")
    cy.get("[data-testid='estimated-one-rep-max']").should("contain", "Estimated 1RM: 67 lb")
  })

  it("can add another independent set", () => {
    visitExercise()

    cy.get("form").within(() => {
      cy.get("#reps").type("5")
      cy.get("#weight").type("100")
      cy.get("button[type='submit']").click()
    })

    cy.get("[data-testid='performances']").should("be.visible")

    cy.get("[data-testid='performance']").should("have.length", 1)
    cy.get("[data-testid='set']").should("have.length", 1)

    const today = new Date().toLocaleDateString()
    cy.get("[data-testid='day']").should("contain", today)

    cy.get("[data-testid='reps-by-weight']").should("contain", "5 x 100 lb")
    cy.get("[data-testid='estimated-one-rep-max']").should("contain", "Estimated 1RM: 113 lb")
  })

  it("can navigate back to the home page", () => {
    visitExercise()

    cy.get("[data-testid='logo']").click()
    cy.get("h1").should("be.visible")
    cy.get("h1").should("contain", "Top Exercises")
  })
})
