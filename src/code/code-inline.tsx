import React from 'react';
import PropTypes from 'prop-types';
import { CodeProps, StyledCodeInline } from './code.styles';

const CodeInline = (props: CodeProps) => {
  const { ...rest } = props;

  return <StyledCodeInline {...rest} />;
};

CodeInline.propTypes = {
  inheritColor: PropTypes.bool,
};

CodeInline.defaultProps = {
  inheritColor: false,
};

export default CodeInline;
