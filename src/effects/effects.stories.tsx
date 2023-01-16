import React from 'react';

import {
  ScrollAnimationWrapper,
  withScrollAnimation,
  ANIMATIONS,
} from './index';

export default {
  title: 'HOCS/Effects',
};

const DemoComponent = () => (
  <div style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }} />
);

const DemoComponentWithScrollAnimation = withScrollAnimation(DemoComponent);
const DemoComponentWithScrollAnimationFade = withScrollAnimation(
  DemoComponent,
  { animation: ANIMATIONS.fade },
);

export const FadeAndDriftWrapperNoJs = () => (
  <ScrollAnimationWrapper>
    <DemoComponent />
  </ScrollAnimationWrapper>
);

export const FadeAndDriftHOCNoJs = () => <DemoComponentWithScrollAnimation />;

export const FadeAndDriftWrapperWithJs = () => (
  <div className="js">
    <ScrollAnimationWrapper>
      <DemoComponent />
    </ScrollAnimationWrapper>
  </div>
);

export const FadeWrapperWithJs = () => (
  <div className="js">
    <ScrollAnimationWrapper animation={ANIMATIONS.fade}>
      <DemoComponent />
    </ScrollAnimationWrapper>
  </div>
);

export const FadeAndDriftHOCWithJs = () => (
  <div className="js">
    <DemoComponentWithScrollAnimation />
  </div>
);

export const FadeHOCWithJs = () => (
  <div className="js">
    <DemoComponentWithScrollAnimationFade />
  </div>
);
