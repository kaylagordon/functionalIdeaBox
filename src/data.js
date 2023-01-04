// function
const data = () => {
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

  const changeView = () => {
    if (view === 'All') {
      view = 'Starred';
    } else {
      view = 'All';
    }
  }

  const getView = () => {
    return view;
  }

  const getFavorites = () => {
    return ideas.filter(idea => idea.favorite);
  }

  return {
    getIdeas,
    addIdea,
    deleteIdea,
    toggleFavorite,
    changeView,
    getView,
    getFavorites
  }

}

// exports
module.exports = data;