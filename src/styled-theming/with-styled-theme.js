import React, { useContext } from 'react';

import { StyledThemeContext, STYLED_THEMES } from './styled-theme-context';

const withStyledTheme = (Component) => {
  const StyledThemedComponent = React.forwardRef((props, ref) => {
    const { theme } = useContext(StyledThemeContext) || {
      theme: STYLED_THEMES.default,
    };

    return <Component theme={theme} ref={ref} {...props} />;
  });

  return StyledThemedComponent;
};

export default withStyledTheme;
