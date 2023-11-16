describe('Deck of Cards API Test', () => {
  it('should navigate to the Deck of Cards API, confirm the site is up, get a new deck, shuffle it, deal three cards to each of two players, check whether either has blackjack, and write out which one does', () => {
    // Step 1: Navigate to the Deck of Cards API
    cy.visit('https://deckofcardsapi.com/');

    // Step 2: Confirm that the site is up
    cy.title().should('include', 'Deck of Cards API');

    // Step 3: Get a new deck
    cy.request('GET', 'https://deckofcardsapi.com/api/deck/new/').as('deck');

    // Step 4: Shuffle the deck
    cy.get('@deck').then((response) => {
      const deckId = response.body.deck_id;
      cy.request('GET', `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
    });
    
    // Step 5: Deal three cards to each of two players
    cy.get('@deck').then((response) => {
      const deckId = response.body.deck_id;

      // Deal three cards to player 1
      cy.request('GET', `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`).as('player1Cards');

      // Deal three cards to player 2
      cy.request('GET', `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`).as('player2Cards');
    });

    // Step 6: Check whether either has blackjack
    cy.get('@player1Cards').then((player1Response) => {
      const player1Cards = player1Response.body.cards;
      const player1HasBlackjack = checkForBlackjack(player1Cards);

      cy.get('@player2Cards').then((player2Response) => {
        const player2Cards = player2Response.body.cards;
        const player2HasBlackjack = checkForBlackjack(player2Cards);

        // Step 7: If either has, write out which one does
        if (player1HasBlackjack || player2HasBlackjack) {
          if (player1HasBlackjack) {
            cy.log('Player 1 has blackjack!');
          }
          if (player2HasBlackjack) {
            cy.log('Player 2 has blackjack!');
          }
        } else {
          cy.log('Neither player has blackjack.');
        }
      });
    });
  });
});

// Helper function to check for blackjack
function checkForBlackjack(cards) {
  const cardValues = cards.map(card => card.value);
  return (cardValues.includes('10') && cardValues.includes('JACK') && cardValues.includes('QUEEN') && cardValues.includes('KING'));
}
