import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

const mockComponent = props => <Wrapper { ...props }/>;

describe('<Wrapper />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
