import React from 'react';
import PropTypes from 'prop-types';

import { StyledText } from './text.styles.js';
import { SIZES } from './constants.js';

const Text = (props) => {
  const { size, children, ...rest } = props;

  return (
    <StyledText size={size} {...rest}>
      {children}
    </StyledText>
  );
};

Text.propTypes = { size: PropTypes.string };

Text.defaultProps = { size: SIZES.inherit };

export default Text;
