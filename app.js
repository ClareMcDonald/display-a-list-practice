// import functions and grab DOM elements
import { renderCandy } from './render-candy.js';
import { renderMyCats } from './render-my-cats.js';
import { renderHomegood } from './render-homegood.js';
import { renderPost } from './render-post.js';
import { candies } from './candies.js';
import { myCats } from './array-my-cats.js';
import { homegoods } from './array-homegoods.js';
import { posts } from './array-posts.js';

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

const homeGoodsEl = document.getElementById('homegoods-list');

for (let homegood of homegoods) {
    const homegoodEl = renderHomegood(homegood);
    homeGoodsEl.append(homegoodEl);
  
}

const postsEl = document.getElementById('posts-list');

for (let post of posts) {
    const postEl = renderPost(post);
    postsEl.append(postEl);
  
// A function is a machine you can plop down, and the the return of a function is the only thing that doesn't get left behind when the machine gets taken away. So I can think of postEl = postDiv from the render function (for this specific post).
}



// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
