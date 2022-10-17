import React from 'react';
import { StyledThemeProvider } from '../styled-theming';
import { CopyButtonWithoutTheme } from './copy-button';

import CopyButton from './index';

export default {
  title: 'Molecules/Copy button',
  component: CopyButtonWithoutTheme,
};

export const Default = () => <CopyButton text="This was a JS copy test." />;
export const Themed = () => (
  <StyledThemeProvider
    theme={{
      textLinkColor: 'red',
      textLinkColorHover: 'yellow',
      textLinkColorDarkMode: 'orange',
      textLinkColorHoverDarkMode: 'whitesmoke',
    }}
  >
    <CopyButton text="This was a JS copy test." />
  </StyledThemeProvider>
);
