import React from 'react';
import PropTypes from 'prop-types';

import { StyledParagraph } from './paragraph.styles';

export interface ParagraphProps extends React.HTMLAttributes<HTMLSpanElement> {
  padding?: boolean;
  children: React.ReactNode;
}

const Paragraph = (props: ParagraphProps) => {
  const { padding = true, ...rest } = props;

  return <StyledParagraph padding={padding} {...rest} />;
};

export default Paragraph;
