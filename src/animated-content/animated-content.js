import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './animated-content.styles';

const HIDDEN_CLASSNAME = 'animated-content__wrapper--hidden';

export const ANIMATIONS = {
  fade: 'fade',
  fadeAndDriftIn: 'fadeAndDriftIn',
};

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

const AnimatedContent = (props) => {
  const { animation, inView, hasBeenInView, children, ...rest } = props;

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

AnimatedContent.propTypes = {
  children: PropTypes.element.isRequired,
  inView: PropTypes.bool,
  animation: PropTypes.oneOf(Object.keys(ANIMATIONS)),
};

AnimatedContent.defaultProps = {
  inView: true,
  animation: ANIMATIONS.fadeAndDriftIn,
};

export default AnimatedContent;
