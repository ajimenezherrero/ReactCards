import React from 'react';
import { shallow } from 'enzyme';

import WrapperTitle from '../WrapperTitle';

const mockComponent = props => <WrapperTitle { ...props }/>;

describe('<WrapperTitle />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
