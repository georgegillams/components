import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './quote.styles';
import withStyledTheme from '../styled-theming';

const Quote = (props) => {
  return <Container {...props} />;
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyledTheme(Quote);

export { Quote as QuoteWithoutTheme };
