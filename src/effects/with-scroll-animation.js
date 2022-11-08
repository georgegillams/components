import React from 'react';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

export const withScrollAnimation = (WrappedComponent, options) => {
  const NewComponent = (props) => {
    return (
      <ScrollAnimationWrapper {...(options || {})}>
        <WrappedComponent {...props} />
      </ScrollAnimationWrapper>
    );
  };

  NewComponent.displayName = `withScrollEffects(${WrappedComponent.displayName})`;

  return NewComponent;
};
