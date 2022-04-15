import React from 'react';
import { render, screen } from '@testing-library/react';

import Text, { TAG_NAMES } from './Text';

describe('text', () => {
  it('should render children', () => {
    render(<Text>content</Text>);

    const text = screen.getByText('content');
    expect(text).toBeTruthy();
  });

  it('Element should be rendered with provided tag', () => {
    render(<Text tagName={TAG_NAMES.h2}>content</Text>);

    const text = screen.getByRole('heading');
    expect(text).toBeTruthy();
  });

  it('Element should not render heading by default', () => {
    render(<Text>content</Text>);

    expect(() => screen.getByRole('heading')).toThrow();
  });
});
