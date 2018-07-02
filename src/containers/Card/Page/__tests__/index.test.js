import React from 'react';
import { shallow } from 'enzyme';


import CardsPage from '../index';

const mockComponent = props => <CardsPage { ...props }/>;

describe('<CardsPage />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
