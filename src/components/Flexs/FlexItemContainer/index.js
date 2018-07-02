import styled from 'styled-components';

import Flex from '../Flex';

const FlexItemContainer = styled(Flex)`
  flex: ${({ grow, shrink, basis }) => `${grow || 1} ${shrink || ''} ${basis || ''}`};
`;

export default FlexItemContainer;
