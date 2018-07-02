import { createSelector } from 'reselect';

const getCardDomain = () => state =>  state.get('cardDomain');

const selectCards = () => createSelector(
  getCardDomain(),
  cardDomain => cardDomain.get('cards').toJS()
);

const selectShowAddCards = () => createSelector(
  getCardDomain(),
  cardDomain => cardDomain.get('showAddCards')
);

export default getCardDomain;
export {
  selectCards,
  selectShowAddCards
};
