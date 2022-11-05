import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledTag } from './tag.styles';
import { TAG_TYPES, TAG_TEXT_MAPPING } from './constants';

const Tag = (props) => {
  const { type, children, ...rest } = props;

  const tagComponent = (
    <StyledTag type={type}>{`${TAG_TEXT_MAPPING[type]}`}</StyledTag>
  );

  return <Wrapper {...rest}>{tagComponent}</Wrapper>;
};

Tag.propTypes = {
  type: PropTypes.oneOf(Object.keys(TAG_TYPES)),
};

Tag.defaultProps = {
  type: null,
};

export default Tag;
