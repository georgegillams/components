import { boolean } from '@storybook/addon-knobs';
import React from 'react';

import AnimatedContent from './index';

export default {
  title: 'Styled/Molecules/Animated content',
  component: AnimatedContent,
};

export const InView = () => (
  <div class="js">
    <AnimatedContent inView>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </AnimatedContent>
  </div>
);
export const OutOfView = () => (
  <div class="js">
    <AnimatedContent inView={false}>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </AnimatedContent>
  </div>
);

export const NoJs = () => (
  <div class="no-js">
    <AnimatedContent inView={boolean('In view', false)}>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </AnimatedContent>
  </div>
);

export const Interactive = () => (
  <div class="js">
    <AnimatedContent inView={boolean('In view', false)}>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </AnimatedContent>
  </div>
);
