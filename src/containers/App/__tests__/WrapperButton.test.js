import React from 'react';
import { shallow } from 'enzyme';

import WrapperButton from '../WrapperButton';

const mockComponent = props => <WrapperButton { ...props }/>;

describe('<WrapperButton />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
