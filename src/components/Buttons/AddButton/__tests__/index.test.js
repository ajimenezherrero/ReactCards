import React from 'react';
import { shallow } from 'enzyme';


import AddButton from '../index';

const mockComponent = props => <AddButton { ...props }/>;

describe('<AddButton />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
