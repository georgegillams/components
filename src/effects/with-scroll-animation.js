import React from 'react';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

export const withScrollAnimation = (WrappedComponent) => {
  const NewComponent = (props) => {
    return (
      <ScrollAnimationWrapper>
        <WrappedComponent {...props} />
      </ScrollAnimationWrapper>
    );
  };

  NewComponent.displayName = `withScrollEffects(${WrappedComponent.displayName})`;

  return NewComponent;
};
