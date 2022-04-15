import React from 'react';
import PropTypes from 'prop-types';

import { StyledText } from './text.styles.js';

export const TAG_NAMES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  span: `span`,
};

const Text = (props) => {
  const { tagName, children, ...rest } = props;

  return (
    <StyledText as={tagName} tagName={tagName} {...rest}>
      {children}
    </StyledText>
  );
};

Text.propTypes = { tagName: PropTypes.string };

Text.defaultProps = { tagName: TAG_NAMES.span };

export default Text;
