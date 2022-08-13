import React from 'react';
import PropTypes from 'prop-types';

import withStyledTheme from '../styled-theming';

import {
  OuterContainer,
  LeftContainer,
  ImageContainer,
  StyledImage,
} from './blog-card.styles';
import Text, { SIZES } from '../text';
import Tag, { TAG_TYPES } from '../tag';

const BlogCard = React.forwardRef((props, ref) => {
  const {
    publishedDate,
    ariaLabel,
    imageBorder,
    imageStyle,
    imageSrc,
    title,
    tags,
    ...rest
  } = props;

  return (
    <OuterContainer aria-label={ariaLabel || title} ref={ref} {...rest}>
      <LeftContainer aria-hidden="true">
        <Text size={SIZES.xl} tagName="h2">
          {title}
        </Text>
        {tags.map((type) => (
          <Tag type={type} />
        ))}
        {publishedDate && <Text>Published {publishedDate}</Text>}
      </LeftContainer>
      {imageSrc && (
        <ImageContainer
          aria-hidden="true"
          style={{
            border: imageBorder ? `solid ${imageBorder} 0.1rem` : 'none',
          }}
        >
          <StyledImage
            aspectX={1}
            aspectY={1}
            imgProps={{
              alt: 'card',
            }}
            lightSrc={imageSrc}
            darkSrc={imageSrc}
            style={imageStyle}
          />
        </ImageContainer>
      )}
    </OuterContainer>
  );
});

BlogCard.propTypes = {
  ariaLabel: PropTypes.string,
  publishedDate: PropTypes.string,
  href: PropTypes.string,
  imageBorder: PropTypes.string,
  imageStyle: PropTypes.string,
  imageSrc: PropTypes.node,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.oneOf(TAG_TYPES)),
};

BlogCard.defaultProps = {
  ariaLabel: null,
  publishedDate: null,
  href: null,
  imageBorder: null,
  imageStyle: null,
  imageSrc: null,
  title: null,
  tags: [],
};

export default withStyledTheme(BlogCard);

export { BlogCard as BlogCardWithoutTheme };
