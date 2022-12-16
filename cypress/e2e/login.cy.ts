describe("Given a page /login", () => {
  describe("When it recieves a Usuario*:'cristina', Contraseña*: '123456789' ", () => {
    it("Then its login ,the when the user click in the button", () => {
      cy.visit("/login");

      cy.findByLabelText("Usuario*").type("cristina");
      cy.findByLabelText("Contraseña*").type("123456789");

      cy.get("button").click();
    });
  });
});
