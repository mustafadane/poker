# Poker Top Hand Finder
This a Node.js app to find the top hand in a Poker game. It uses [Deck of Cards API](https://deckofcardsapi.com/) for creating a deck of cards, shuffling the cards, and drawing 5 cards. Then app calculates the best hand with these cards and outputs the result to the console. For unit tests, Mocha and Chai frameworks are used.

While building the project, I made some assumptions which are mainly about the Deck of Cards API. I assume that there might be some errors while connecting to that API. Therefore, I added error handlers to prevent app from crash. Also, I assume that the data returned from API will always be in the same format. If that changes in the future, modifications might be necessary.

## Installation
To use the app, fork and clone the repo.
Make sure to have **npm** and **node** installed.
Run these commands from root directory of the project.

To start the app
```console
npm install
npm start
```
To run the tests
```console
npm test
```
