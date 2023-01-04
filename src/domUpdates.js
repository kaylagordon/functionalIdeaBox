// DOM elements
const cardContainer = document.querySelector('.card-container');
const filterBtn = document.querySelector('#filter-btn');

// functions
const clearInputs = (title, body) => {
  title.value = '';
  body.value = '';
}

const displayIdeas = (ideas) => {
  cardContainer.innerHTML = '';

  ideas.forEach(idea => {
    cardContainer.innerHTML += `<section class="card" id="${idea.id}">
      <header>
        <button class="favorite-btn">*</button>
        <button class="delete-btn">X</button>
      </header>
      <section>
        <h3>${idea.title}</h3>
        <p>${idea.body}</p>
      </section>
    </section>`
  })
}

const updateFilterButton = (view) => {
  filterBtn.innerText = `Show ${view} Ideas`;
}


// exports
module.exports = {
  displayIdeas,
  clearInputs,
  updateFilterButton
}