import React, { MutableRefObject, useEffect, useRef } from 'react';
import { StyledThemeProvider } from '../styled-theming';

import TextLink, { applyStylesToAnchor } from './index';
import { TextLinkWithoutTheme } from './text-link';

const testTheme = {
  textLinkColor: 'red',
  textLinkColorHover: 'pink',
  textLinkColorDarkMode: 'orange',
  textLinkColorHoverDarkMode: 'yellow',
};

const FocusTextLink = (props: { href: string; children: React.ReactNode }) => {
  const link = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (link?.current) {
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
  title: 'Atoms/Text link',
  component: TextLinkWithoutTheme,
};
export const Default = () => <TextLink href="/lol">Test</TextLink>;
export const Focused = () => <FocusTextLink href="/lol">Test</FocusTextLink>;
export const External = () => (
  <div>
    This is an external link to{' '}
    <TextLink hrefExternal href="/lol">
      Test
    </TextLink>{' '}
    content on another site.
  </div>
);
export const ExternalInScrollContainer = () => (
  <div style={{ width: '10rem', overflowX: 'scroll' }}>
    <div style={{ width: '15rem' }}>
      This is an external link to{' '}
      <TextLink hrefExternal href="/lol">
        Test
      </TextLink>{' '}
      content on another site.
    </div>
  </div>
);
export const Themed = () => (
  <StyledThemeProvider theme={testTheme}>
    <TextLink hrefExternal href="/lol">
      Test
    </TextLink>
  </StyledThemeProvider>
);
const AnchorComponent = applyStylesToAnchor((props) => (
  <a style={{ border: 'limegreen 10px solid' }} {...props} />
));
export const CustomAnchorComponent = () => (
  <TextLink hrefExternal href="/lol" anchorComponent={AnchorComponent}>
    Test
  </TextLink>
);
