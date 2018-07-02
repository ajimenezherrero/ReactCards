import React from 'react';
import { shallow } from 'enzyme';

import CardsEmptyView from '../index';

const mockComponent = props => <CardsEmptyView { ...props }/>;

describe('<CardsEmptyView />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
