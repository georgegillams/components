import React from 'react';

import ObjectAsList from './index';

export default {
  title: 'Molecules/Object as list',
  component: ObjectAsList,
};

export const Default = () => (
  <ObjectAsList
    name="Geoff"
    value={{
      id: 'test-01',
      timestamp: new Date(2019, 10, 11, 5, 6, 7),
      lastUpdatedTimestamp: new Date(2019, 10, 11, 5, 6, 7),
      authorId: 'Me',
      unspecifiedKey: 'testValue',
      unspecifiedObjectKey: { test1: '1', test2: '2' },
    }}
  />
);
