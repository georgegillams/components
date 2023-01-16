import React, { Component, ReactComponentElement } from 'react';
import PropTypes from 'prop-types';

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledP,
  StyledSpan,
  TextProps,
  TextComponentProps,
} from './text.styles';
import { SIZES } from './constants';

const componentForTagName: {
  [tagName: string]: (props: TextComponentProps) => JSX.Element;
} = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  span: StyledSpan,
  p: StyledP,
};

const Text = (props: TextProps) => {
  const { size, tagName, children, ...rest } = props;

  const Component = componentForTagName[tagName];
  if (!Component) {
    return null;
  }

  return (
    <Component size={size} {...rest}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  size: PropTypes.string,
  tagName: PropTypes.oneOf(Object.keys(componentForTagName)),
};

Text.defaultProps = { size: SIZES.inherit, tagName: 'span' };

export default Text;
