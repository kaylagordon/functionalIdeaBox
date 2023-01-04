// imports
import data from './data';
import {
  displayIdeas,
  clearInputs,
  updateFilterButton
} from './domUpdates';

const app = data();

// DOM elements
const titleInput = document.querySelector('#title-input');
const bodyInput = document.querySelector('#body-input');
const makeIdeaBtn = document.querySelector('#save-btn');
const cardContainer = document.querySelector('.card-container');
const filterBtn = document.querySelector('#filter-btn');

// functions
const makeIdea = () => {
  app.addIdea({ title: titleInput.value, body: bodyInput.value, favorite: false, id: Date.now() });
  showIdeas();
  clearInputs(titleInput, bodyInput);
}

const updateCard = (event) => {
  const targetClassList = event.target.classList; 
  const targetId = parseInt(event.target.closest('section').id);

  if(targetClassList.contains('favorite-btn')) {
    app.toggleFavorite(targetId);
  } else if(targetClassList.contains('delete-btn')) {
    app.deleteIdea(targetId);
    showIdeas();
  } 
}

const toggleView = () => {
  app.changeView();
  updateFilterButton(app.getView());
  showIdeas();
}

const showIdeas = () => {
  if(app.getView() === 'All') {
    displayIdeas(app.getIdeas());
  } else {
    displayIdeas(app.getFavorites());
  }
}

// event listeners
makeIdeaBtn.addEventListener('click', makeIdea);

cardContainer.addEventListener('click', function(event) {
  updateCard(event);
});

filterBtn.addEventListener('click', toggleView);