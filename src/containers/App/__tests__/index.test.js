import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { App, mapDispatchToProps } from '../index';
import { setShowAddCards, addCard } from '../../Card/actions'

jest.mock('../../Card/actions', () => ({
  setShowAddCards: jest.fn(),
  addCard: jest.fn()
}));

jest.mock('../../Card/Page', () => 'CardPage');
jest.mock('../../Card/Form', () => 'CardForm');
jest.mock('../../../components/Buttons/AddButton', () => 'AddButton');
jest.mock('../../../components/EmptyViews/Card', () => 'Card');
jest.mock('../../../components/Flexs/Flex', () => 'Flex');
jest.mock('../../../components/Modal', () => 'Modal');
jest.mock('../Wrapper', () => 'Wrapper');
jest.mock('../WrapperButton', () => 'WrapperButton');

const initialProps = {
  cards: []
}
const mockComponent = props => {
  const finalProps = { ...initialProps, ...props };

  return (
    <App { ...finalProps }/>
  );
};

describe('<App />', () => {
  it('should render component with empty cards', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with empty cards and show modal', () => {
    const props = {
      showAddCards: true
    }
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with cards', () => {
    const props = {
      cards: [{
        title: 'title',
        description: 'description',
        image: 'image'
      }]
    }
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('handleAddButtonClick', () => {
    it('should call onSetShowAddCards', () => {
      const onSetShowAddCards = jest.fn();
      const props = {
        onSetShowAddCards
      };
      const instance = shallow(mockComponent(props)).instance();

      instance.handleAddButtonClick();

      expect(onSetShowAddCards).toHaveBeenCalled();
    });
  });

  describe('handleSubmit', () => {
    it('should call onAddCard and onSetShowAddCards', () => {
      const onAddCard = jest.fn();
      const onSetShowAddCards = jest.fn();
      const props = {
        onAddCard,
        onSetShowAddCards
      };
      const instance = shallow(mockComponent(props)).instance();

      instance.handleSubmit();

      expect(onAddCard).toHaveBeenCalled();
      expect(onSetShowAddCards).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch setShowAddCards', () => {
      const { onSetShowAddCards } = mapDispatchToProps(jest.fn());

      onSetShowAddCards();

      expect(setShowAddCards).toHaveBeenCalled();
    });

    it('should dispatch addCard', () => {
      const { onAddCard } = mapDispatchToProps(jest.fn());

      onAddCard();

      expect(addCard).toHaveBeenCalled();
    });
  });
});
