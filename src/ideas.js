// function
const ideasData = () => {
  let ideas = [];
  let view = 'All';

  const getIdeas = () => {
    return ideas;
  }

  const addIdea = (newIdea) => {
    ideas = [...ideas, newIdea];
  }

  const deleteIdea = (id) => {
    ideas = ideas.filter(idea => idea.id !== id);
  }

  const toggleFavorite = (id) => {
    ideas.forEach(idea => {
      if(idea.id === id) {
        idea.favorite = !idea.favorite;
      }
    })
  }

  const getFavorites = () => {
    return ideas.filter(idea => idea.favorite);
  }

  return {
    getIdeas,
    addIdea,
    deleteIdea,
    toggleFavorite,
    getFavorites
  }

}

// exports
module.exports = ideasData;