import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../../src/card';

describe('Card', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Card>Some content</Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
