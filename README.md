# functionalIdeaBox

## Set Up
1. Clone this repo
2. `cd` into the directory
3. `npm i`
4. `npm start` 

## Reflections

1. Looking through your code, were you able to:
- Make use of Pure Functions?
- Make use of Higher Order Functions?
- Make use of Closures?
- Make use of Curried Functions?
- Make use of Composition?

2. How did you go about creating your data model? Where is it in your code?  
I used a function `ideasData` to store the data for the `ideas` array. I used a function `viewData` to store the data on which view was active (filtered or all). Each of those functions stored the data AND held all functions for updating that data.

3. How well were you able to separate your data model from the DOM logic? Where is that separation in the code?  
The two functions listed in #2 were my data model and I put all DOM updates in their own file - `domUpdates`. I used `main.js` to communicate between the two files, but there is definitely some gray areas where some overlap may have occurred. I made an effort to ensure that I was always: 1. updating the data model first and 2. using the data model to inform the DOM updates.
