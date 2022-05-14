import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './animated-content.styles';

const HIDDEN_CLASSNAME = 'animated-content__wrapper--hidden';

const AnimatedContent = (props) => {
  const { inView, children, ...rest } = props;

  return (
    <>
      <style>
        {/* The hidden style is only shown if an ancestor element has the `js` class. */}
        {/* This style is inlined to ensure that it is available as soon as the HTML is delivered to the browser. */}
        {`.js .${HIDDEN_CLASSNAME} {
  padding-top: 4rem;
  opacity: 0.01;
}`}
      </style>
      <Wrapper className={inView ? '' : HIDDEN_CLASSNAME} {...rest}>
        {children}
      </Wrapper>
    </>
  );
};

AnimatedContent.propTypes = {
  children: PropTypes.element.isRequired,
  inView: PropTypes.bool,
};

AnimatedContent.defaultProps = {
  inView: true,
};

export default AnimatedContent;
