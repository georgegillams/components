import React from 'react';
import AnimatedContent from '../animated-content';
import withScroll from '../scroll-container';
const AnimatedContentWithScroll = withScroll(AnimatedContent);

export const withScrollAnimation = (WrappedComponent) => {
  const NewComponent = (props) => {
    return (
      <AnimatedContentWithScroll>
        <WrappedComponent {...props} />
      </AnimatedContentWithScroll>
    );
  };

  NewComponent.displayName = `withScrollEffects(${WrappedComponent.displayName})`;

  return NewComponent;
};
