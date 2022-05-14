import React from 'react';

import { Paragraph } from '../Paragraph';
import { text } from '@storybook/addon-knobs';

import Error from './index';

export default { title: 'Styled/Molecules/Error', component: Error };

export const Default = () => (
  <Error>
    <Paragraph>{text('Message', 'Lorem ipsum dolor sit amet')}</Paragraph>
  </Error>
);

export const ErrorInside = () => (
  <Paragraph>
    <Error>{text('Message', 'Lorem ipsum dolor sit amet')}</Error>
  </Paragraph>
);
