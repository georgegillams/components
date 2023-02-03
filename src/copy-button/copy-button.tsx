import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from './copy-button.styles';
import withStyledTheme from '../styled-theming';

export interface CopyButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
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

export default withStyledTheme<CopyButtonProps>(CopyButton);

export { CopyButton as CopyButtonWithoutTheme };
