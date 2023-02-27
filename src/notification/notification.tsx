import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './notification-comp.styles';
import { StyledThemeProvider, STYLED_THEMES } from '../styled-theming';

export enum NOTIFICATION_TYPES {
  neutral = 'neutral',
  success = 'success',
  warn = 'warn',
  error = 'error',
}

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  type?: NOTIFICATION_TYPES;
  deleted?: boolean;
}

const Notification = (props: NotificationProps) => {
  const {
    type = NOTIFICATION_TYPES.neutral,
    deleted,
    children,
    ...rest
  } = props;

  return (
    <StyledThemeProvider theme={STYLED_THEMES.white}>
      <Wrapper type={type} {...rest}>
        {children}
      </Wrapper>
    </StyledThemeProvider>
  );
};

export default Notification;
