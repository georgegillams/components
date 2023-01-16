import React from 'react';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { AnimatedContentProps } from '../animated-content';

export const withScrollAnimation = <PropTypes extends {}>(
  WrappedComponent: React.ComponentType<PropTypes>,
  options: AnimatedContentProps | undefined = undefined,
) => {
  const NewComponent = (props: PropTypes) => {
    return (
      <ScrollAnimationWrapper {...(options || {})}>
        <WrappedComponent {...props} />
      </ScrollAnimationWrapper>
    );
  };

  // @ts-ignore
  NewComponent.displayName = `withScrollEffects(${WrappedComponent.displayName})`;

  return NewComponent;
};
