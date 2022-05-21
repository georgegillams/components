import React from 'react';

import { RequestStatusContainer } from './index';

export default {
  title: 'Styled/Organisms/Request status',
  component: RequestStatusContainer,
};

export const Success = () => (
  <RequestStatusContainer
    statuses={[
      { type: 'success', message: 'Cool bananas' },
      { type: 'success', message: 'Everything is looking 👌' },
      { type: 'success', message: 'Nothing broke' },
    ]}
  />
);
export const Warn = () => (
  <RequestStatusContainer
    statuses={[
      { type: 'warn', message: 'Oh shucks' },
      { type: 'warn', message: 'Something feels wrong 🙈' },
      { type: 'warn', message: 'Wait for it...' },
    ]}
  />
);
export const Error = () => (
  <RequestStatusContainer
    statuses={[
      { type: 'error', message: 'Dang' },
      { type: 'error', message: 'Not looking good 🥴' },
      { type: 'error', message: 'Houston we have a problem.' },
    ]}
  />
);
