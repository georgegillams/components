import React from 'react';
import { StyledThemeProvider } from '../styled-theming';

import CopyButton from './index';

export default { title: 'Styled/Molecules/Copy button', component: CopyButton };

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
