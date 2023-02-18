import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './animated-content.styles';

const HIDDEN_CLASSNAME = 'animated-content__wrapper--hidden';

export enum ANIMATIONS {
  fade = 'fade',
  fadeAndDriftIn = 'fadeAndDriftIn',
}

//  The hidden style is only shown if an ancestor element has the `js` class.
//  This style is inlined to ensure that it is available as soon as the HTML is delivered to the browser.
const ANIMATION_CSS = {
  [ANIMATIONS.fade]: `.js .${HIDDEN_CLASSNAME} {
  opacity: 0.01;
}`,
  [ANIMATIONS.fadeAndDriftIn]: `.js .${HIDDEN_CLASSNAME} {
  padding-top: 4rem;
  opacity: 0.01;
}`,
};

export interface AnimatedContentProps extends HTMLAttributes<HTMLDivElement> {
  animation?: ANIMATIONS;
  inView?: boolean;
  hasBeenInView?: boolean;
}

const AnimatedContent = (props: AnimatedContentProps) => {
  const {
    animation = ANIMATIONS.fadeAndDriftIn,
    inView = true,
    hasBeenInView = true,
    children,
    ...rest
  } = props;

  const show = inView || hasBeenInView;

  const cssForAnimation =
    ANIMATION_CSS[animation] || ANIMATION_CSS.fadeAndDriftIn;

  return (
    <>
      <style>{cssForAnimation}</style>
      <Wrapper className={show ? '' : HIDDEN_CLASSNAME} {...rest}>
        {children}
      </Wrapper>
    </>
  );
};

export default AnimatedContent;
