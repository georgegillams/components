import React from 'react';

import Spinner from './index';

export default { title: 'Atoms/Spinner', component: Spinner };

export const Default = () => <Spinner />;
export const Large = () => <Spinner large />;
export const Light = () => (
  <div
    style={{
      backgroundColor: '#1e1e1e',
    }}
  >
    <Spinner light />
  </div>
);
