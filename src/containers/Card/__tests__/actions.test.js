import { actionTypes as at } from '../constants';

import { setShowAddCards, addCard } from '../actions';

describe('Card/actions', () => {
  describe('setShowAddCards', () => {
    it('should return type', () => {
      const value = true;

      expect(setShowAddCards(value)).toEqual({
        type: at.SET_SHOW_ADD_CARD,
        value
      });
    });
  });

  describe('addCard', () => {
    it('should return type', () => {
      const value = {
        title: 'title',
        description: 'description',
        image: 'image'
      };

      expect(addCard(value)).toEqual({
        type: at.ADD_CARD,
        value
      });
    });
  });
});
