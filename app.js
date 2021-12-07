// import functions and grab DOM elements
import { renderCandy } from './render-candy.js';
import { candies } from './candies.js';
const candiesEl = document.getElementById('candies-list');

for (let candy of candies) {

    const candyEl = renderCandy(candy);
    candiesEl.append(candyEl);
}

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
