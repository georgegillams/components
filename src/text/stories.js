import React from 'react';

import Text, { TAG_NAMES } from './index';
import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Styled/Text', component: Text };

export const Default = () => (
  <Text tagName={select('tagName', Object.keys(TAG_NAMES), TAG_NAMES.span)}>
    {text('Text', 'Lorem ipsum')}
  </Text>
);

export const EveryTag = () => (
  <>
    {Object.keys(TAG_NAMES).map((t) => (
      <Text tagName={t}>Lorem ipsum</Text>
    ))}
  </>
);
