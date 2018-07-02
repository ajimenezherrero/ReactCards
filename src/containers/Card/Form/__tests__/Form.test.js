import React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form';

const mockComponent = props => <Form { ...props }/>;

describe('<Form />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
