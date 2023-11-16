The Checkers Game - UI Automated Tests


This repository contains automated tests for the Checkers Game. The tests were written using Cypress and implemented following steps:

1.Navigate to https://www.gamesforthebrain.com/game/checkers/
2.Confirm that the site is up
3.Make attempt to move blue.
4.Make five legal moves as orange
5.Restart the game after five moves
6.Confirm that the restarting had been successful

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

