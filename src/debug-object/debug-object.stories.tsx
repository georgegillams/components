import React from 'react';

import DebugObject from './index';

export default {
  title: 'Molecules/Debug object',
  component: DebugObject,
};

export const Default = () => (
  <div>
    <DebugObject
      debugTitle="Geoff"
      debugObject={{
        id: 'test-01',
        timestamp: new Date(2019, 10, 11, 5, 6, 7),
        lastUpdatedTimestamp: new Date(2019, 10, 11, 5, 6, 7),
        authorId: 'Me',
        unspecifiedKey: 'testValue',
        unspecifiedObjectKey: { test1: '1', test2: '2' },
      }}
    />
  </div>
);
