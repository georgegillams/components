import React from 'react';
import renderer from 'react-test-renderer';

import { SkipLink } from '../../src/SkipLink';

describe('SkipLink', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<SkipLink href="#main" label="Skip to main content" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should support custom class names', () => {
    const tree = renderer
      .create(
        <SkipLink
          href="#main"
          label="Skip to main content"
          className="custom-classname"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should support arbitrary props', () => {
    const tree = renderer
      .create(
        <SkipLink href="#main" label="Skip to main content" testID="123" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
