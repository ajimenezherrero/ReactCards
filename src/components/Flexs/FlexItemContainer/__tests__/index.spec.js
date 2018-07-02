import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import FlexItemContainer from '../index';

describe('<FlexItemContainer />', () => {

  it('renders with its style', () => {
    const tree = renderer.create(<FlexItemContainer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
