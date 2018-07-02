import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

export const initialState = fromJS({
  cards: [],
  showAddCards: false
});

export const cardReducer = (state = initialState, { type, ...action}) => {
  switch (type) {
    case at.ADD_CARD:
      return state
        .set('cards', state.get('cards').push(action.value));
    case at.SET_SHOW_ADD_CARD:
      return state
        .set('showAddCards', action.value);
    default:
      return state;
  }
};

export default cardReducer;
