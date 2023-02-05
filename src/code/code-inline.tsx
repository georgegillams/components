import React from 'react';
import PropTypes from 'prop-types';
import { CodeProps, StyledCodeInline } from './code.styles';

const CodeInline = (props: CodeProps) => {
  const { inheritColor = false, ...rest } = props;

  return <StyledCodeInline inheritColor={inheritColor} {...rest} />;
};

export default CodeInline;
