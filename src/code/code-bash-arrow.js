import React from 'react';
import PropTypes from 'prop-types';

import { StyledCodeBashArrow } from './code.styles';

const CodeBashArrow = (props) => (
  <StyledCodeBashArrow {...props}>{'▶ '}</StyledCodeBashArrow>
);

CodeBashArrow.propTypes = {
  lang: PropTypes.string,
};

CodeBashArrow.defaultProps = {
  lang: null,
};

export default CodeBashArrow;
