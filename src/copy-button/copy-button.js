import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from './copy-button.styles';
import withStyledTheme from '../styled-theming';

const CopyButton = (props) => {
  const { text, accessibilityLabel, className, theme, ...rest } = props;

  return (
    <Button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
      {...rest}
    >
      <Icon aria-label={accessibilityLabel || `Copy ${text}`} theme={theme} />
    </Button>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  accessibilityLabel: PropTypes.string,
  theme: PropTypes.object,
};

CopyButton.defaultProps = {
  accessibilityLabel: null,
  theme: null,
};

export default withStyledTheme(CopyButton);
