import PropTypes from 'prop-types';
import React from 'react';
import { DateText } from './article-date.styles';

const ArticleDate = (props) => {
  const { date, padding = true, ...rest } = props;

  return (
    <DateText padding={padding} {...rest}>
      Published {date && date.toString()}
    </DateText>
  );
};

ArticleDate.propTypes = {
  date: PropTypes.object.isRequired,
  padding: PropTypes.bool,
};

ArticleDate.defaultProps = {
  padding: true,
};

export default ArticleDate;
