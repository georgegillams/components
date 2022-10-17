import React from 'react';
import AnimatedContent from '../animated-content';
import withScroll from '../scroll-container';
const AnimatedContentWithScroll = withScroll(AnimatedContent);

export const ScrollAnimationWrapper = (props) => {
  return (
    <AnimatedContentWithScroll>
      <WrappedComponent {...props} />
    </AnimatedContentWithScroll>
  );
};
