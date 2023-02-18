import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { Error as StyledError } from './error.styles';

export interface ErrorProps extends HTMLAttributes<HTMLSpanElement> {}

const Error = (props: ErrorProps) => {
  return <StyledError {...props} />;
};

Error.propTypes = {
  children: PropTypes.node,
};

Error.defaultProps = {
  children: null,
};

export default Error;
