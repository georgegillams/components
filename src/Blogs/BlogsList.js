import React from 'react';
import PropTypes from 'prop-types';

import BlogCard from './BlogCard';

import ArticleCard from '../Cards';
import Tag from '../Tag';

const BlogsList = props => {
  const { className, blogs, linkPrefix, ...rest } = props;

  return (
    <div {...rest}>
      {blogs.map(blog => (
        <BlogCard blog={blog} linkPrefix={linkPrefix} />
      ))}
    </div>
  );
};

BlogsList.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  linkPrefix: PropTypes.string.isRequired,
  className: PropTypes.string,
};

BlogsList.defaultProps = {
  className: null,
};

export default BlogsList;
