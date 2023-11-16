describe('Checkers Game Automation', () => {
  it('play game', () => {
    // Step 1: Navigate to the game URL
    cy.visit('https://www.gamesforthebrain.com/game/checkers/');
    cy.viewport(1928,910)

    // Step 2: Confirm that the site is up
    cy.get('h1').should('contain.text', 'Checkers');

    // Step 3: Make five legal moves as orange:
    // (a) and (b)
    cy.get('img[name="space62"]').click();
    cy.get('img[name="space73"]').click();
    cy.wait(3000);
    cy.contains('Make a move').should('be.visible');


    cy.get('img[name="space42"]').click();
    cy.get('img[name="space53"]').click();
    cy.wait(3000);
    cy.contains('Make a move').should('be.visible');

    cy.get('img[name="space22"]').click();
    cy.get('img[name="space33"]').click();
    cy.wait(3000);
    cy.contains('Make a move').should('be.visible');

    cy.get('img[name="space11"]').click();
    cy.get('img[name="space33"]').click();
    cy.wait(5000);

    cy.get('img[name="space11"]').click();
    cy.get('img[name="space15"]').click();
    cy.wait(3000);

    // (c) Restart the game after five moves
    cy.reload();

    // (d)	Confirm that the restarting had been successful by checking the text in the h1 tag
    cy.get('h1').should('contain.text', 'Checkers');
  });
});
