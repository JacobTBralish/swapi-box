export const addFavoriteProp = (card) => {
  return {...card, style: 'favorite'};
};

const findSelected = (event, card) => {
  return event.target.id === card.Name;
};

const withoutSelected = (event, card) => {
  return event.target.id !== card.Name;
};

export const makeNewState = (currState, event) => {
  let index;
  const newCard = addFavoriteProp(currState.find( card => {
    index = currState.indexOf(card);
    return findSelected(event, card);
  }));
    
  const newState = currState.filter( card => withoutSelected(event, card));
  newState.splice(index, 0, newCard);
  return newState;
};