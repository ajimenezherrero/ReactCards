import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';

import { selectCards, selectShowAddCards } from '../Card/selectors';
import { setShowAddCards, addCard } from '../Card/actions';
import CardPage from '../Card/Page';
import CardForm from '../Card/Form';

import AddButton from '../../components/Buttons/AddButton';
import CardsEmptyView from '../../components/EmptyViews/Card';
import Flex from '../../components/Flexs/Flex';
import Modal from '../../components/Modal';

import Wrapper from './Wrapper';
import WrapperButton from './WrapperButton';

class App extends PureComponent {
  handleAddButtonClick = () => {
    const { onSetShowAddCards } = this.props;

    onSetShowAddCards(true);
  };

  handleSubmit = form => {
    const { onAddCard, onSetShowAddCards } = this.props;

    onAddCard(form);
    onSetShowAddCards(false);
  }

  renderContent() {
    const { cards } = this.props;

    if (!cards.length) {
      return (
        <Flex alignCenter justifyCenter>
          <CardsEmptyView />
        </Flex>
      )
    }

    return (
      <CardPage cards={cards} />
    )
  }

  renderModal() {
    const { showAddCards } = this.props;

    if (showAddCards) {
      return (
        <Modal>
          <CardForm onSubmit={this.handleSubmit} />
        </Modal>
      )
    }
  }

  render() {
    return (
      <Wrapper>
        {this.renderContent()}
        {this.renderModal()}
        <WrapperButton>
          <AddButton onClick={this.handleAddButtonClick}>
            Add
          </AddButton>
        </WrapperButton>
      </Wrapper>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  cards: selectCards(),
  showAddCards: selectShowAddCards()
});

export const mapDispatchToProps = dispatch => ({
  onSetShowAddCards: value => dispatch(setShowAddCards(value)),
  onAddCard: card => dispatch(addCard(card))
});

App.propTypes = {
  card: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
