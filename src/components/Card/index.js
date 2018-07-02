import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import WrapperDescription from './WrapperDescription';
import WrapperTitle from './WrapperTitle';

const Card = ({ title, description, image }) => {
  return (
    <Wrapper>
      <WrapperTitle image={image}>
        {title}
      </WrapperTitle>
      <WrapperDescription>
        {description}
      </WrapperDescription>
    </Wrapper>
  );
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
