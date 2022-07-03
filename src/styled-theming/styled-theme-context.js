import React from 'react';

const themeProperties = [
  'textLinkColor',
  'textLinkColorHover',
  'textLinkColorDarkMode',
  'textLinkColorHoverDarkMode',
  'checkboxTickColor',
  'checkboxTickColorDarkMode',
  'progressBarColor',
  'progressBarColorDarkMode',
  'quoteBarColor',
  'quoteBarColorDarkMode',
  'buttonPrimaryBackgroundColor',
  'buttonPrimaryBackgroundColorDarkMode',
  'buttonPrimaryForegroundColor',
  'buttonPrimaryForegroundColorDarkMode',
  'buttonDestructiveBackgroundColor',
  'buttonDestructiveBackgroundColorDarkMode',
  'buttonDestructiveForegroundColor',
  'buttonDestructiveForegroundColorDarkMode',
  'buttonBouncyBackgroundColor',
  'buttonBouncyBackgroundColorDarkMode',
  'buttonBouncyForegroundColor',
  'buttonBouncyForegroundColorDarkMode',
  'cardHighlightColor',
  'cardHighlightColorDarkMode',
  'cardHoverForegroundColor',
  'cardHoverForegroundColorDarkMode',
];

export const STYLED_THEMES = {
  default: themeProperties.reduce(
    (prev, next) => ({ ...prev, [next]: null }),
    {},
  ),
  white: themeProperties.reduce(
    (prev, next) => ({ ...prev, [next]: 'white' }),
    {},
  ),
};

export const StyledThemeContext = React.createContext(
  { theme: STYLED_THEMES.default }, // default value
);

export const StyledThemeProvider = ({ theme, ...rest }) => (
  <StyledThemeContext.Provider value={{ theme }} {...rest} />
);
