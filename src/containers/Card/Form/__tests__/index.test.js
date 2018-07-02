import React from 'react';
import { shallow } from 'enzyme';

import CardsForm from '../index';

const mockComponent = props => <CardsForm { ...props }/>;

describe('<CardsForm />', () => {
  it('should render component', () => {
    const tree = shallow(mockComponent());

    expect(tree).toMatchSnapshot();
  });
});
