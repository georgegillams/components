import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from './copy-button.styles';
import withStyledTheme from '../styled-theming';

export interface CopyButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
  accessibilityLabel?: string;
  theme?: any;
}

const CopyButton = (props: CopyButtonProps) => {
  const { text, accessibilityLabel, theme, ...rest } = props;

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
  onClick: PropTypes.func,
};

CopyButton.defaultProps = {
  accessibilityLabel: undefined,
  theme: undefined,
  onClick: undefined,
};

export default withStyledTheme<CopyButtonProps>(CopyButton);

export { CopyButton as CopyButtonWithoutTheme };
