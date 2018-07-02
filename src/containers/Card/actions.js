import { actionTypes as at } from './constants';

export const setShowAddCards = value => ({
  type: at.SET_SHOW_ADD_CARD,
  value
});

export const addCard = value => ({
  type: at.ADD_CARD,
  value
});
