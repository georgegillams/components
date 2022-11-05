import React from 'react';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

export const withScrollAnimation = (WrappedComponent) => {
  const NewComponent = (props) => {
    const { animationProps, ...rest } = props;

    return (
      <ScrollAnimationWrapper {...animationProps}>
        <WrappedComponent {...rest} />
      </ScrollAnimationWrapper>
    );
  };

  NewComponent.displayName = `withScrollEffects(${WrappedComponent.displayName})`;

  return NewComponent;
};
