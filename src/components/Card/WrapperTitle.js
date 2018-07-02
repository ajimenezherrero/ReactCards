import styled from 'styled-components';
import PropTypes from 'prop-types';

const getComputedStyles = ({ image }) => {
  if (image) {
    return (`
      background-image: url(${image});
    `)
  }
}

const WrapperTitle = styled.div`
  padding: 15px;
  display: flex;
  align-items: flex-end;
  font-size: 24px;
  flex: 2;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${props => getComputedStyles(props)}
`;

WrapperTitle.propTypes = {
};

export default WrapperTitle;
