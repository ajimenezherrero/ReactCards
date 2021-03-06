import React from 'react';
import { shallow } from 'enzyme';

import Flex from '../index';

const mockComponent = props => <Flex { ...props }/>;

describe('<Flex />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
