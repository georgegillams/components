import React, { ComponentType, useContext } from 'react';

import {
  ThemeContextType,
  StyledThemeContext,
  STYLED_THEMES,
} from './styled-theme-context';

const withStyledTheme = <P extends object>(Component: ComponentType<P>) => {
  const StyledThemedComponent = React.forwardRef((props: P, ref) => {
    const { theme } = useContext(StyledThemeContext) || {
      theme: STYLED_THEMES.default,
    };

    return <Component theme={theme} ref={ref} {...props} />;
  });

  return StyledThemedComponent;
};

export default withStyledTheme;
