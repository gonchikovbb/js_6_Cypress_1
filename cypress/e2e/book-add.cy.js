describe('Book add', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.login("bropet@mail.ru", "123");
    });

    it("Should be add new book", () => {
        cy.addBook("Atlas Shrugged", "Dystopia", "Ayn Rand");
        cy.contains("Ayn Rand").should("be.visible");
    });

    it("Should be add book with favorite", () => {
        cy.addBookWithFavorite("The godfather", "Prose for adults", "Mario Puzo");
        cy.contains("Mario Puzo").should("be.visible");
    });

    it("Should be delete book from favorite", () => {
        cy.addBookWithFavorite("Martin Eden", "Drama", "Jack London");
        cy.get("h4").click();
        cy.deleteBookFromFavoriteForTitle("Martin Eden");
        cy.contains("Martin Eden").should("not.exist");
    });
});