import React from 'react';
import { shallow } from 'enzyme';


import CircleButton from '../index';

const mockComponent = props => <CircleButton { ...props }/>;

describe('<CircleButton />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
