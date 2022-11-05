import React from 'react';
import styled from 'styled-components';
import AnimatedContent from '../animated-content';
import withScroll from '../scroll-container';
const AnimatedContentWithScroll = withScroll(AnimatedContent);

const StyledAnimatedContentWithScroll = styled(AnimatedContentWithScroll)`
  width: 100%;
`;

export const ScrollAnimationWrapper = (props) => (
  <StyledAnimatedContentWithScroll {...props} />
);
