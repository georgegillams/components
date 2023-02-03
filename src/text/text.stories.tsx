import React from 'react';

import Text, { SIZE } from './index';
import { text, select } from '@storybook/addon-knobs';

export default { title: 'Atoms/Text', component: Text };

export const Default = () => (
  <Text size={select('Size', Object.keys(SIZE), SIZE.md) as SIZE}>
    {text('Text', 'Lorem ipsum')}
  </Text>
);

export const EverySize = () => (
  <>
    {Object.keys(SIZE).map((s) => (
      <div key={s}>
        <Text size={s as SIZE}>Lorem ipsum — {s}</Text>
        <br />
      </div>
    ))}
  </>
);
