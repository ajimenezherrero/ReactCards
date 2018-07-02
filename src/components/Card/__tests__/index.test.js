import React from 'react';
import { shallow } from 'enzyme';


import Card from '../index';

const mockComponent = props => <Card { ...props }/>;

describe('<Card />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
