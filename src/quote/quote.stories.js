import React from 'react';

import Quote from './index';
import { QuoteWithoutTheme } from './quote';

export default {
  title: 'Molecules/Quote',
  component: QuoteWithoutTheme,
};

export const Default = () => <Quote>Lorem ipse dolor sit amet.</Quote>;
