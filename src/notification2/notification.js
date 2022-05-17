import React from 'react';
import PropTypes from 'prop-types';

import { StyledNotification } from './notification.styles';
import { StyledThemeProvider, STYLED_THEMES } from '../styled-theming';

export const NOTIFICATION_TYPES = {
  neutral: 'neutral',
  success: 'success',
  warn: 'warn',
  error: 'error',
};

const Notification = (props) => {
  const { ...rest } = props;

  return (
    <StyledThemeProvider theme={STYLED_THEMES.allWhite}>
      <StyledNotification {...rest} />
    </StyledThemeProvider>
  );
};

Notification.propTypes = {
  deleted: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node,
};

Notification.defaultProps = {
  deleted: false,
  type: NOTIFICATION_TYPES.neutral,
  children: null,
};
export default Notification;
