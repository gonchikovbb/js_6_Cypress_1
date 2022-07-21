describe("Group name", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Should be open page", () => {
        cy.visit("/");
        cy.contains('Log in').should('be.visible');
    });

    it("Should be able to login with correct login and password", () => {
        cy.login('bropet@mail.ru', '123');
        cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible');   
    });

    it("Should not be able to login with empty login", () => {
        cy.login(null, "123");
        cy.get("#mail").then(($el) => cy.log($el));
        cy.get("#mail")
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });

    it("Should not be able to login with empty password", () => {
        cy.login("test@test.com", null);
        cy.get("#pass").then(($el) => cy.log($el));
        cy.get("#pass")
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });
});