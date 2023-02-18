import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';

import DegreeModule from './index';

export default {
  title: 'Molecules/Degree module',
  component: DegreeModule,
};

export const Default = () => (
  <DegreeModule
    name="Test"
    filled={boolean('Filled', false)}
    percentage={number('Percentage', 50)}
    markerPosition={number('Marker', 70)}
  />
);
