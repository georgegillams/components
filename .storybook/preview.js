import React from 'react';

import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import STYLES from './global-styles.scss';
import { cssModules } from '../src/helpers/cssModules';
import { StyledThemeProvider, STYLED_THEMES } from '../src/styled-theming';
import { object } from '@storybook/addon-knobs';
import GlobalCSS, { GlobalWrapper } from './global.styles';

const getClassName = cssModules(STYLES);

export const decorators = [
  (Story) => (
    <GlobalWrapper>
      <GlobalCSS />
      <div className={getClassName('global-wrapper')}>
        <StyledThemeProvider theme={object('Theme', STYLED_THEMES.default)}>
          <Story />
        </StyledThemeProvider>
      </div>
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
