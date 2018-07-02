import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import FlexItem from '../index';

describe('<FlexItem />', () => {
  it('renders div  with default value', () => {
    const tree = renderer.create(
      <FlexItem />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex-grow specified', () => {
    const tree = renderer.create(
      <FlexItem grow={1} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex-shrink specified', () => {
    const tree = renderer.create(
      <FlexItem shrink={1} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex-basis specified', () => {
    const tree = renderer.create(
      <FlexItem basis="100%" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
