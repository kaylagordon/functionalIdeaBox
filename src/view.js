// function
const viewData = () => {
  let view = 'All';

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

  return {
    changeView,
    getView,
  }

}

// exports
module.exports = viewData;