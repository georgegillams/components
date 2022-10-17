import React from 'react';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

export const withScrollAnimation = (WrappedComponent) => {
  const NewComponent = (props) => {
    return <ScrollAnimationWrapper {...props} />;
  };

  NewComponent.displayName = `withScrollEffects(${WrappedComponent.displayName})`;

  return NewComponent;
};
