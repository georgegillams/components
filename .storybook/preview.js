import React from 'react';

import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import { StyledThemeProvider, STYLED_THEMES } from '../src/styled-theming';
import { object } from '@storybook/addon-knobs';
import GlobalCSS, { GlobalWrapper } from './global.styles';

export const decorators = [
  (Story) => (
    <GlobalWrapper>
      <GlobalCSS />
      <StyledThemeProvider theme={object('Theme', STYLED_THEMES.default)}>
        <Story />
      </StyledThemeProvider>
    </GlobalWrapper>
  ),
];

export const parameters = {
  backgrounds: {
    values: [
      { name: 'Dark', value: '#000000' },
      { name: 'Sky blue', value: '#0770E3' },
      { name: 'Orange', value: '#ffbb00' },
    ],
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};
