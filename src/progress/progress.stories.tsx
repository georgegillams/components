import React from 'react';

import Progress from './index';
import { number } from '@storybook/addon-knobs';
import { ProgressWithoutTheme } from './progress';

export default {
  title: 'Atoms/Progress',
  component: ProgressWithoutTheme,
};

export const Default = () => <Progress progress={number('Progress', 50)} />;
