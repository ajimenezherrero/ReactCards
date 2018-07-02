import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Flex from '../index';

describe('<Flex />', () => {
  it('renders div with inline flex', () => {
    const tree = renderer.create(
      <Flex inline />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex column direction', () => {
    const tree = renderer.create(
      <Flex column />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex aligned to the end', () => {
    const tree = renderer.create(
      <Flex alignEnd />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex aligned to the start', () => {
    const tree = renderer.create(
      <Flex alignStart />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex aligned strech', () => {
    const tree = renderer.create(
      <Flex alignStrech />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex aligned to the center', () => {
    const tree = renderer.create(
      <Flex alignCenter />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex aligned baseline', () => {
    const tree = renderer.create(
      <Flex alignBaseline />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex justified to the end', () => {
    const tree = renderer.create(
      <Flex justifyEnd />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex justified to the start', () => {
    const tree = renderer.create(
      <Flex justifyStart />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex justified strech', () => {
    const tree = renderer.create(
      <Flex justifyCenter />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex justified to the center', () => {
    const tree = renderer.create(
      <Flex justifyAround />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex justified baseline', () => {
    const tree = renderer.create(
      <Flex justifyBetween />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders div with flex aligned and justified', () => {
    const tree = renderer.create(
      <Flex justifyCenter alignCenter />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
