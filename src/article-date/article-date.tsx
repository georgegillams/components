import PropTypes from 'prop-types';
import React, { HTMLAttributes } from 'react';
import { DateText } from './article-date.styles';

export interface ArticleDateProps extends HTMLAttributes<HTMLSpanElement> {
  date: Date;
  padding?: boolean;
}

const ArticleDate = (props: ArticleDateProps) => {
  const { date, padding = true, ...rest } = props;

  return (
    <DateText padding={padding} {...rest}>
      Published {date && date.toString()}
    </DateText>
  );
};

export default ArticleDate;
