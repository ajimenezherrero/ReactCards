import React from 'react';
import { shallow } from 'enzyme';

import WrapperEditButton from '../WrapperEditButton';

const mockComponent = props => <WrapperEditButton { ...props }/>;

describe('<WrapperEditButton />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
