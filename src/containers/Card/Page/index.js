import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from '../../../components/Card';

import Wrapper from './Wrapper';

class CardsPage extends PureComponent {
  handleOnEditClick = info => {
    console.log('INFO', info);
  }

  renderContent() {
    const { cards } = this.props;

    return cards.map(({ title, description, image }, index) => <Card key={index} index={index} title={title} description={description} image={image} onEdicClick={this.handleOnEditClick}/>);
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
