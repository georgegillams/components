import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import AnimatedContent, { ANIMATIONS } from '../animated-content';
import withScroll from '../scroll-container';
const AnimatedContentWithScroll = withScroll(AnimatedContent);

const fadeKeyframes = keyframes`
  0% {
    opacity: 0.01;
    }
    100% {
      opacity: 1;
      }
      `;

const fadeAndDriftInKeyframes = keyframes`
  0% {
    opacity: 0.01;
padding-top: 4rem;
    }
    100% {
      opacity: 1;
padding-top: 0;
      }
      `;

const FadeWrapper = styled.div`
  animation: ${fadeKeyframes} 0.4s ease-in-out;
`;

const FadeAndDriftInWrapper = styled.div`
  animation: ${fadeAndDriftInKeyframes} 0.4s ease-in-out;
`;

export const AnimationWrapper = (props) => {
  const { animation, ...rest } = props;
  const WrapperComponent = useMemo(() => {
    switch (animation) {
      case ANIMATIONS.fade:
        return FadeWrapper;
      case ANIMATIONS.fadeAndDriftIn:
        return FadeAndDriftInWrapper;
      default:
        return FadeAndDriftInWrapper;
    }
  }, [animation]);

  return <WrapperComponent {...rest} />;
};
