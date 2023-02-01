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
  'buttonPrimaryForegroundColorHover',
  'buttonPrimaryForegroundColorHoverDarkMode',
  'buttonDestructiveBackgroundColor',
  'buttonDestructiveBackgroundColorDarkMode',
  'buttonDestructiveForegroundColor',
  'buttonDestructiveForegroundColorDarkMode',
  'buttonDestructiveForegroundColorHover',
  'buttonDestructiveForegroundColorHoverDarkMode',
  'buttonBouncyBackgroundColor',
  'buttonBouncyBackgroundColorDarkMode',
  'buttonBouncyForegroundColor',
  'buttonBouncyForegroundColorDarkMode',
  'buttonBouncyForegroundColorHover',
  'buttonBouncyForegroundColorHoverDarkMode',
  'cardHighlightColor',
  'cardHighlightColorDarkMode',
  'cardHoverForegroundColor',
  'cardHoverForegroundColorDarkMode',
  'cardHoverForegroundColorHover',
  'cardHoverForegroundColorHoverDarkMode',
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
