import React from 'react';
import { action } from '@storybook/addon-actions';

import { Switch } from './index';

export default { title: 'Switch', component: Switch };

export const On = () => <Switch onClick={action('Switch clicked')} />;
export const Off = () => <Switch on onClick={action('Switch clicked')} />;
