// import functions and grab DOM elements
import { renderCandy } from './render-candy.js';
import { renderMyCats } from './render-my-cats.js';
import { candies } from './candies.js';
import { myCats } from './array-my-cats.js';
const candiesEl = document.getElementById('candies-list');

for (let candy of candies) {

    const candyEl = renderCandy(candy);
    candiesEl.append(candyEl);
}


const myCatsEl = document.getElementById('my-cats-list');

for (let cat of myCats) {

    const catEl = renderMyCats(cat);
    myCatsEl.append(catEl);
}






// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
