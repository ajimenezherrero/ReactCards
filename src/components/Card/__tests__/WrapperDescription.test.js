import React from 'react';
import { shallow } from 'enzyme';

import WrapperDescription from '../WrapperDescription';

const mockComponent = props => <WrapperDescription { ...props }/>;

describe('<WrapperDescription />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
