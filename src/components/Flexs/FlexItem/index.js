import styled from 'styled-components';

const FlexItem = styled.div`
  flex: ${({ grow, shrink, basis }) => `${grow || 1} ${shrink || ''} ${basis || ''}`};
`;

export default FlexItem;
