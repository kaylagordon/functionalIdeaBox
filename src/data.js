// function
const data = () => {
  let ideas = [];

  const getIdeas = () => {
    return ideas;
  }

  const addIdea = (newIdea) => {
    ideas = [...ideas, newIdea];
  }

  const deleteIdea = (id) => {
    ideas = ideas.filter(idea => idea.id !== id);
    console.log(ideas)
  }

  return {
    getIdeas,
    addIdea,
    deleteIdea
  }

}

// exports
module.exports = data;