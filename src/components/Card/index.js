import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import EditButton from '../Buttons/CircleButton'
import Wrapper from './Wrapper';
import WrapperDescription from './WrapperDescription';
import WrapperEditButton from './WrapperEditButton';
import WrapperTitle from './WrapperTitle';

class Card extends PureComponent {
  state = {
    active: false
  }

  handleClick = () => {
    const { onEdicClick, index } = this.props;

    onEdicClick({
      index
    });
  }

  handleMouseEnter = () => {
    this.setState({
      active: true
    });
  }

  handleMouseLeave = () => {
    this.setState({
      active: false
    });
  }

  renderEditButton() {
    const { active } = this.state;

    if (active) {
      return (
        <WrapperEditButton>
          <EditButton
            onClick={this.handleClick}
            backgroundColor="green"
            size="50px"
            fontSize="12px"
          >
            Edit
          </EditButton>
        </WrapperEditButton>
      );
    }
  }

  render() {
    const { description, image, title } = this.props;

    return (
      <Wrapper onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
        <WrapperTitle image={image}>
          {title}
        </WrapperTitle>
        <WrapperDescription>
          {description}
        </WrapperDescription>
        {this.renderEditButton()}
      </Wrapper>
    );
  }
};

Card.defaultProps = {
  title: '',
  description: '',
  image: ''
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default Card;
