import React from 'react';

import Text, { SIZES } from './index';
import { text, select } from '@storybook/addon-knobs';

export default { title: 'Styled/Molecules/Text', component: Text };

export const Default = () => (
  <Text size={select('Size', Object.keys(SIZES), SIZES.md)}>
    {text('Text', 'Lorem ipsum')}
  </Text>
);

export const EverySize = () => (
  <>
    {Object.keys(SIZES).map((s) => (
      <>
        <Text size={s}>Lorem ipsum — {s}</Text>
        <br />
      </>
    ))}
  </>
);
