import React from 'react';

import Text, { SIZES } from './index';
import { text, select } from '@storybook/addon-knobs';

export default { title: 'Atoms/Text', component: Text };

export const Default = () => (
  <Text size={select('Size', Object.keys(SIZES), SIZES.md) as SIZES}>
    {text('Text', 'Lorem ipsum')}
  </Text>
);

export const EverySize = () => (
  <>
    {Object.keys(SIZES).map((s) => (
      <div key={s}>
        <Text size={s as SIZES}>Lorem ipsum — {s}</Text>
        <br />
      </div>
    ))}
  </>
);
