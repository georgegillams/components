import React, { Component, ReactComponentElement } from 'react';
import { SIZE, TAG_NAME } from './constants';

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledP,
  StyledSpan,
} from './text.styles';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: SIZE;
  tagName?: TAG_NAME;
  children: React.ReactNode;
}

const componentForTagName: {
  [tagName: string]: React.ComponentType<{
    size: SIZE;
  }>;
} = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  span: StyledSpan,
  p: StyledP,
};

const Text = (props: TextProps) => {
  const {
    size = SIZE.inherit,
    tagName = TAG_NAME.span,
    children,
    ...rest
  } = props;

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

export default Text;
