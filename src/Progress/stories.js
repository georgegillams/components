import React from 'react';

import Progress from './index';
import { number } from '@storybook/addon-knobs';

export default {
  title: 'Styled/Molecules/Progress',
  component: Progress,
};

export const Default = () => <Progress progress={number('Progress', 50)} />;
