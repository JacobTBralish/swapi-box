## Synopsis

This project was a solo project completed in under a week. It's purpose is to sift through the deeply nested endpoints of a galaxy far far away (otherwise known as the Star Wars API), clean the data that comes back, and populate the screen with a Jedi/Sith themed UI to tie it all back together. This was an exercise in handling asyncronous actions in JavaScript, and all of those actions are unit and integration tested with Enzyme and Jest. The application itself is built in React, Router, and JavaScript. 

## Code Example

Upon page load, a randomly generated opening crawl from one of the 7 films will scroll across in true Star Wars fashion. As Users utilize the Router NavLinks to experience different portions of the application, additional API calls will be made to populate the "card" UI with trivia information from either the People, Planets, or Vehicles portion of the Star Wars API. Users can also favorite various cards, and watch as the Dark Side consumes the screen.

## Installation

Clone the repo [here](https://github.com/JordanPQuinn/swapi-box)

For initial set up:
  npm install
  npm run - visit whatever localhost channel 
  
## Tests

Tests were made using Jest and Enzyme and can be run using the command: npm test
As mentioned above, even the asyncronous actions are properly mocked, stubbed, and tested for full unit and integration test coverage.

## Contributors

Jordan Quinn: sole contributer
