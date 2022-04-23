import React from 'react';
import PropTypes from 'prop-types';

import { Error as StyledError } from './error.styles';

const Error = (props) => {
  return <StyledError {...props} />;
};

Error.propTypes = {
  children: PropTypes.node,
};

Error.defaultProps = {
  children: null,
};

export default Error;
