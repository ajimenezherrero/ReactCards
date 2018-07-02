import { fromJS } from 'immutable';

import { cardReducer, initialState } from '../reducer';
import { actionTypes as at } from '../constants';

describe('Card/reducer', () => {
  it('should return the initial state', () => {
    let state;

    expect(cardReducer(state, {})).toEqual(initialState);
  });

  it('should handle ADD_CARD', () => {
    const value = {
      title: 'title',
      description: 'description',
      image: 'image'
    };
    const action = {
      type: at.ADD_CARD,
      value
    };
    const expectedResult = initialState
      .set('cards', initialState.get('cards').push(action.value));

    expect(cardReducer(initialState, action)).toEqual(expectedResult);
  });

  it('should handle SET_SHOW_ADD_CARD', () => {
    const value = true;
    const action = {
      type: at.SET_SHOW_ADD_CARD,
      value
    };
    const expectedResult = initialState
      .set('showAddCards', true);

    expect(cardReducer(initialState, action)).toEqual(expectedResult);
  });
});
