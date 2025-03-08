import React from 'react';

// Note: Here it is important that we import the theme properties without importing the component, as the component relies on the theme properties
import { buttonThemeProperties } from '../button/constants';

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
  ...buttonThemeProperties,
  'cardHighlightColor',
  'cardHighlightColorDarkMode',
  'cardHoverForegroundColor',
  'cardHoverForegroundColorDarkMode',
  'cardHoverForegroundColorHover',
  'cardHoverForegroundColorHoverDarkMode',
];

export const STYLED_THEMES: Record<string, any> = {
  default: themeProperties.reduce(
    (prev, next) => ({ ...prev, [next]: null }),
    {},
  ),
  white: themeProperties.reduce(
    (prev, next) => ({ ...prev, [next]: 'white' }),
    {},
  ),
};

export interface ThemeContextType {
  theme: any;
}

export interface ThemeProviderProps extends ThemeContextType {
  children: React.ReactNode;
}

export const StyledThemeContext = React.createContext<ThemeContextType>(
  { theme: STYLED_THEMES.default }, // default value
);

export const StyledThemeProvider = (props: ThemeProviderProps) => {
  const { theme, ...rest } = props;
  return <StyledThemeContext.Provider value={{ theme }} {...rest} />;
};
