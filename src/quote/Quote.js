import React from 'react';
import { Container } from './quote.styles';
import withStyledTheme from '../styled-theming';

const Quote = (props) => {
  return <Container {...props} />;
};

export default withStyledTheme(Quote);
