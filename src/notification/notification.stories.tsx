import React from 'react';

// @ts-ignore
import MarkdownRenderer from '../markdown-renderer';

import Notification, { NOTIFICATION_TYPES } from './index';

export default {
  title: 'Molecules/Notifications',
  component: Notification,
};

export const NotificationSimpleSuccess = () => (
  <Notification type={NOTIFICATION_TYPES.success}>Simple text</Notification>
);
export const NotificationSimpleWarn = () => (
  <Notification type={NOTIFICATION_TYPES.warn}>Simple text</Notification>
);
export const NotificationSimpleError = () => (
  <Notification type={NOTIFICATION_TYPES.error}>Simple text</Notification>
);
export const NotificationMarkdown = () => (
  <Notification type={NOTIFICATION_TYPES.warn}>
    <MarkdownRenderer
      padding={false}
      content="Hi. Here's a [link](https://www.google.com/)"
    />
  </Notification>
);
