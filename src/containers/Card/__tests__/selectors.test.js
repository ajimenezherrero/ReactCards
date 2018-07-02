import { fromJS } from 'immutable';

import getCardDomain, {
  selectCards,
  selectShowAddCards
} from '../selectors';

describe('Card/selectors', () => {
  describe('selectGlobal', () => {
    it('should select the global state', () => {
      const selector = getCardDomain();
      const cardDomain = fromJS({});
      const mockedState = fromJS({
        cardDomain
      });

      expect(selector(mockedState)).toEqual(cardDomain);
    });
  });

  describe('selectCards', () => {
    it('should select cards', () => {
      const selector = selectCards();
      const cards = [{
        title: 'title',
        description: 'description',
        image: 'image'
      }];
      const cardDomain = fromJS({
        cards
      });
      const mockedState = fromJS({ cardDomain });

      expect(selector(mockedState)).toEqual(cards);
    });
  });

  describe('selectShowAddCards', () => {
    it('should select showAddCards', () => {
      const selector = selectShowAddCards();
      const showAddCards = true;
      const cardDomain = fromJS({
        showAddCards
      });
      const mockedState = fromJS({ cardDomain });

      expect(selector(mockedState)).toEqual(showAddCards);
    });
  });
});
