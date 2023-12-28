import React from 'react';
import { Wrapper, StyledTag } from './tag.styles';
import { TAG_TEXT_MAPPING, TAG_TYPES } from './constants';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: TAG_TYPES;
}

const Tag = (props: TagProps) => {
  const { type, ...rest } = props;

  const tagComponent = (
    <StyledTag type={type}>{`${TAG_TEXT_MAPPING[type]}`}</StyledTag>
  );

  return <Wrapper {...rest}>{tagComponent}</Wrapper>;
};

export default Tag;
