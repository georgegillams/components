import React from 'react';

export const STYLED_THEMES = {
  default: {
    textLinkColor: null,
    textLinkColorHover: null,
    textLinkColorDarkMode: null,
    textLinkColorHoverDarkMode: null,
    checkboxTickColor: null,
    checkboxTickColorDarkMode: null,
  },
};

export const StyledThemeContext = React.createContext(
  { theme: STYLED_THEMES.default }, // default value
);

export const StyledThemeProvider = ({ theme, ...rest }) => (
  <StyledThemeContext.Provider value={{ theme }} {...rest} />
);
