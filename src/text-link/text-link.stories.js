import React, { useEffect, useRef } from 'react';
import { StyledThemeProvider } from '../styled-theming';

import TextLink from './index';
import { TextLinkWithoutTheme } from './text-link';

const testTheme = {
  textLinkColor: 'red',
  textLinkColorHover: 'pink',
  textLinkColorDarkMode: 'orange',
  textLinkColorHoverDarkMode: 'yellow',
};

const FocusTextLink = (props) => {
  const link = useRef(null);

  useEffect(() => {
    if (link.current) {
      link.current.focus();
    }
  }, []);

  return (
    <TextLink ref={link} {...props}>
      Test
    </TextLink>
  );
};

export default {
  title: 'Molecules/Text link',
  component: TextLinkWithoutTheme,
};
export const Default = () => (
  <TextLink href="/lol" name="Test">
    Test
  </TextLink>
);
export const Focused = () => (
  <FocusTextLink href="/lol" name="Test">
    Test
  </FocusTextLink>
);
export const External = () => (
  <div>
    This is an external link to{' '}
    <TextLink hrefExternal href="/lol" name="Test">
      Test
    </TextLink>{' '}
    content on another site.
  </div>
);
export const ExternalInScrollContainer = () => (
  <div style={{ width: '10rem', overflowX: 'scroll' }}>
    <div style={{ width: '15rem' }}>
      This is an external link to{' '}
      <TextLink hrefExternal href="/lol" name="Test">
        Test
      </TextLink>{' '}
      content on another site.
    </div>
  </div>
);
export const Themed = () => (
  <StyledThemeProvider theme={testTheme}>
    <TextLink hrefExternal href="/lol" name="Test">
      Test
    </TextLink>
  </StyledThemeProvider>
);
