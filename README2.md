The Card Game - API Automated Tests

This repository contains API automated tests for the Card Game. The tests were written using Cypress and implemented following steps:

1.Navigate to https://deckofcardsapi.com
2.Confirm the site is up
3.Get a new deck
4.Shuffle it
5.Deal three cards to each of two players
6.Check whether either has blackjack
7.If either has, write out which one does


Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

Node.js (v16.x)

Setup

Clone the repository to your local machine.
git clone https://github.com/Zeku2590/automation-game-cypress.git
cd automation-game-cypress

Install the project dependencies.

npm install

Running the Tests

This project uses Cypress, so it allows testing with multiple browser types (Chromium, Firefox). To run the tests locally, execute the following command:

npx cypress open




