import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './quote.styles';
import withStyledTheme from '../styled-theming';

export interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {}

const Quote = (props: QuoteProps) => {
  return <Container {...props} />;
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyledTheme(Quote);

export { Quote as QuoteWithoutTheme };
