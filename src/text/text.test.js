import React from 'react';
import { render, screen } from '@testing-library/react';

import Text from './text';

describe('text', () => {
  it('should render children', () => {
    render(<Text>content</Text>);

    const text = screen.getByText('content');
    expect(text).toBeTruthy();
  });

  it('should be rendered with provided tag', () => {
    render(<Text as="h2">content</Text>);

    const text = screen.getByRole('heading');
    expect(text).toBeTruthy();
  });

  it('should render heading by default', () => {
    render(<Text>content</Text>);

    expect(() => screen.getByRole('heading')).toThrow();
  });
});
