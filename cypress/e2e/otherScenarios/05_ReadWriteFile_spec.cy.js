describe("Read-Write File", () => {
    it.skip("Write to a file", () => {
      cy.writeFile("sample.txt", "HELLO WORLD\n");
      cy.writeFile("sample.txt", "Hello Everyone, welcome you all....happy learning !!", { flag: "a+" });
    });
  
    it.only("Read a file", () => {
      cy.readFile("sample.txt").should("include", "HELLO WORLD");
    });
  });