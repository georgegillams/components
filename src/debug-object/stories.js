import React from 'react';
import { storiesOf } from '@storybook/react';

import DebugObject from './index';

storiesOf('Styled/Organisms/Debug object', module).add('default', () => (
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
));
