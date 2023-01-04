// function
const data = () => {
  let ideas = [];

  const getIdeas = () => {
    return ideas;
  }

  const addIdea = (newIdea) => {
    ideas = [...ideas, newIdea];
    console.log(ideas)
  }

  return {
    getIdeas,
    addIdea
  }

}

// exports
module.exports = data;