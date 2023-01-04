// DOM elements
const cardContainer = document.querySelector('.card-container');

// functions
const displayIdeas = (ideas) => {
  ideas.forEach(idea => {
    cardContainer.innerHTML += `<section class="card" id="card-${idea.id}">
      <header>
        <button class="favorite-btn">*</button>
        <button class="delete-btn">X</button>
      </header>
      <section>
        <h3>${idea.title}</h3>
        <p>${idea.body}</p>
      </section>
      <footer>
        <button class="comment-btn">+ Comment</button>
      </footer>
    </section>`
  })
}


// exports
module.exports = {
  displayIdeas,

}