import React from 'react';
import PropTypes from 'prop-types';

import { StyledParagraph } from './paragraph.styles';

const Paragraph = (props) => {
  const { ...rest } = props;

  return <StyledParagraph {...rest} />;
};

Paragraph.propTypes = {
  padding: PropTypes.bool,
  children: PropTypes.node,
};

Paragraph.defaultProps = {
  padding: true,
  children: null,
};

export default Paragraph;
