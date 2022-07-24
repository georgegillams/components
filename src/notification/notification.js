import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './notification-comp.styles';
import { StyledThemeProvider, STYLED_THEMES } from '../styled-theming';

export const NOTIFICATION_TYPES = {
  neutral: 'neutral',
  success: 'success',
  warn: 'warn',
  error: 'error',
};

const Notification = (props) => {
  const { type, deleted, children, ...rest } = props;

  return (
    <StyledThemeProvider theme={STYLED_THEMES.white}>
      <Wrapper type={type} {...rest}>
        {children}
      </Wrapper>
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
  type: 'neutral',
  children: null,
};

export default Notification;
