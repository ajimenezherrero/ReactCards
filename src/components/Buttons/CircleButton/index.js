import styled from 'styled-components';
import PropTypes from 'prop-types';

const getComputedStyles = ({ backgroundColor, color, fontSize, size }) => (`
  height: ${size};
  width: ${size};
  background-color: ${backgroundColor};
  color: ${color};
  font-size: ${fontSize};
`)

const CircleButton = styled.button`
  display:block;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  border: none;

  ${props => getComputedStyles(props)}
`;

CircleButton.defaultProps = {
  size: '75px',
  color: 'white',
  backgroundColor: 'red',
  fontSize: '24px'
};

CircleButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string
};

export default CircleButton;
