import styled from 'styled-components';
import PropTypes from 'prop-types';

const AddButton = styled.button`
display:block;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 24px;
  outline: none;
  cursor: pointer;
`;

AddButton.propTypes = {

};

export default AddButton;
