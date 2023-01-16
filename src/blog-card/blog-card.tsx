import React, { HTMLAttributes } from 'react';

import withStyledTheme from '../styled-theming';

import {
  OuterContainer,
  LeftContainer,
  ImageContainer,
  StyledImage,
} from './blog-card.styles';
import Text, { SIZES, TAG_NAME } from '../text';
import Tag, { TAG_TYPES } from '../tag';

export interface BlogCardProps extends HTMLAttributes<HTMLAnchorElement> {
  publishedDate?: string;
  ariaLabel: string;
  imageBorder?: string;
  imageSrc?: string;
  imageStyle?: {};
  tags?: Array<TAG_TYPES>;
  href?: string;
}

const BlogCard = React.forwardRef<HTMLAnchorElement, BlogCardProps>(
  (props, ref) => {
    const {
      publishedDate,
      ariaLabel,
      imageBorder,
      imageStyle,
      imageSrc,
      title,
      tags = [],
      ...rest
    } = props;

    return (
      <OuterContainer aria-label={ariaLabel || title} ref={ref} {...rest}>
        <LeftContainer aria-hidden="true">
          <Text size={SIZES.xl} tagName={TAG_NAME.h2}>
            {title}
          </Text>
          {tags.map((type) => (
            <Tag key={type} type={type} />
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
  },
);

export default withStyledTheme(BlogCard);

export { BlogCard as BlogCardWithoutTheme };
