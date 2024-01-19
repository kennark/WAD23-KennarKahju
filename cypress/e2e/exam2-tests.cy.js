/// <reference types = "cypress"/>  

it('Test 1', () => {
    cy.visit("http://localhost:8080/Instructor");
    cy.get("h1").should("contain", "Instructor Management Pannel");
    cy.wait(500);
    cy.get("input[name='exam']:first").clear().type("0");
    cy.get("button[class='update']:first").click();
    cy.wait(500);
    cy.get("td:last").click();
})