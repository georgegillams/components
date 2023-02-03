import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledTag } from './tag.styles';
import { TAG_TEXT_MAPPING, TAG_TYPES } from './constants';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: TAG_TYPES;
  children: React.ReactNode;
}

const Tag = (props: TagProps) => {
  const { type, children, ...rest } = props;

  const tagComponent = (
    <StyledTag type={type}>{`${TAG_TEXT_MAPPING[type]}`}</StyledTag>
  );

  return <Wrapper {...rest}>{tagComponent}</Wrapper>;
};

export default Tag;
