import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';

import AnimatedContent, { ANIMATIONS } from './index';

export default {
  title: 'Molecules/Animated content',
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
    <AnimatedContent
      inView={boolean('In view', false)}
      animation={select(
        'Animation',
        Object.values(ANIMATIONS),
        ANIMATIONS.fadeAndDriftIn,
      )}
    >
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </AnimatedContent>
  </div>
);
