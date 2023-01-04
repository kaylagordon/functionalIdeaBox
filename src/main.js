// imports
import data from './data';
import {
  displayIdeas
} from './domUpdates';

const app = data();

console.log(app.getIdeas());


// DOM elements
const titleInput = document.querySelector('#title-input');
const bodyInput = document.querySelector('#body-input');
const makeIdeaBtn = document.querySelector('#save-btn');

// event listeners
makeIdeaBtn.addEventListener('click', function() {
  app.addIdea({ title: titleInput.value, body: bodyInput.value, id: Date.now() });
  displayIdeas(app.getIdeas());
});

