import React from 'react';
import renderer from 'react-test-renderer';

import SkipLink from './index';

describe('SkipLink', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<SkipLink href="#main" label="Skip to main content" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should support arbitrary props', () => {
    const tree = renderer
      .create(
        // @ts-ignore
        <SkipLink href="#main" label="Skip to main content" testID="123" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
