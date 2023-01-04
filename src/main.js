// imports
import data from './data';
import {
  displayIdeas
} from './domUpdates';

const app = data();

// DOM elements
const titleInput = document.querySelector('#title-input');
const bodyInput = document.querySelector('#body-input');
const makeIdeaBtn = document.querySelector('#save-btn');
const cardContainer = document.querySelector('.card-container');

// event listeners
makeIdeaBtn.addEventListener('click', function() {
  app.addIdea({ title: titleInput.value, body: bodyInput.value, id: Date.now() });
  displayIdeas(app.getIdeas());
});

cardContainer.addEventListener('click', function(event) {
  updateCard(event);
});

const updateCard = (event) => {
  const targetClasslist = event.target.classList; 
  const targetId = parseInt(event.target.closest('section').id);

  if(targetClasslist.contains('favorite-btn')) {
    console.log('favorite')
  } else if(targetClasslist.contains('delete-btn')) {
    app.deleteIdea(targetId);
    displayIdeas(app.getIdeas());
  } else if(targetClasslist.contains('comment-btn')) {
    console.log('comment')
  }
}
