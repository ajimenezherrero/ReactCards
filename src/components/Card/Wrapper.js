import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 30%;
  min-height: 200px;

  box-shadow: 3px 3px 5px 6px #ccc;
`;

Wrapper.propTypes = {
};

export default Wrapper;
