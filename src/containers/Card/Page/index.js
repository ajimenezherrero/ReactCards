import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from '../../../components/Card';

import Wrapper from './Wrapper';

class CardsPage extends PureComponent {
  renderContent() {
    const { cards } = this.props;

    return cards.map(({ title, description, image }, index) => <Card key={index} title={title} description={description} image={image} />)
  }

  render() {
    return (
      <Wrapper>
        {this.renderContent()}
      </Wrapper>
    );
  }
};

CardsPage.defaultProps = {
  cards: []
};

CardsPage.propTypes = {
  cards: PropTypes.array
};

export default CardsPage;
