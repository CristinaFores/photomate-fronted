describe("Given a page /register", () => {
  describe("When it recieves a Usuario*:'cristineta', Email*: 'cristineta@gmail.com', Contraseña*: '12345678' ", () => {
    it("Then its register ,the when the user click in the button", () => {
      cy.visit("/register");

      cy.findByLabelText("Usuario*").type("Cristineta");
      cy.findByLabelText("Email*").type("cristineta@gmail.com");
      cy.findByLabelText("Contraseña*").type("12345678");

      cy.get("button").click();
    });
  });
});
