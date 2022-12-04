import React from 'react';
import PropTypes from 'prop-types';

import withStyledTheme from '../styled-theming';

import {
  AnnotationMobile,
  AnnotationsContainer,
  AnnotationTablet,
  CenterContainer,
  ChildrenContainer,
  ImageContainer,
  OuterContainer,
  StyledCard,
  StyledImage,
} from './feature-card.styles';
import Text, { SIZES } from '../text';

export const FEATURE_CARD_LAYOUTS = {
  auto: 'auto',
  narrowCompact: 'narrowCompact',
};

const FeatureCard = React.forwardRef((props, ref) => {
  const {
    annotations,
    ariaLabel,
    children,
    imageBorder,
    imageStyle,
    imageSrc,
    layout,
    title,

    disabled,
    backgroundImageStyle,

    ...rest
  } = props;

  const cardContent = (
    <OuterContainer aria-hidden="true">
      <AnnotationsContainer layout={layout} className={'date container'}>
        {annotations && annotations.map && (
          <>
            {/* Note we're using an additional div here to apply the className
            due to an issue with className ordering in next.js */}
            <AnnotationMobile>
              <Text size={SIZES.lg}>{annotations.join(' ')}</Text>
            </AnnotationMobile>
            {annotations.map((annotation) => (
              <AnnotationTablet key={annotation}>
                <Text size={SIZES.lg} key={annotation}>
                  {annotation}
                </Text>
              </AnnotationTablet>
            ))}
          </>
        )}
      </AnnotationsContainer>
      <CenterContainer>
        <Text size={SIZES.xl} tagName="h2">
          {title}
        </Text>
        {children && <ChildrenContainer>{children}</ChildrenContainer>}
      </CenterContainer>
      {imageSrc && (
        <ImageContainer
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
            disabled={disabled}
          />
        </ImageContainer>
      )}
    </OuterContainer>
  );

  return (
    <StyledCard
      aria-label={ariaLabel || title}
      disabled={disabled}
      backgroundImageStyle={backgroundImageStyle}
      ref={ref}
      layout={layout}
      {...rest}
    >
      {cardContent}
    </StyledCard>
  );
});

FeatureCard.propTypes = {
  ariaLabel: PropTypes.string,
  backgroundImageStyle: PropTypes.string,
  children: PropTypes.node,
  annotations: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  fillImageSrc: PropTypes.node,
  href: PropTypes.string,
  imageBorder: PropTypes.string,
  imageStyle: PropTypes.string,
  imageSrc: PropTypes.node,
  layout: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

FeatureCard.defaultProps = {
  ariaLabel: null,
  backgroundImageStyle: null,
  children: null,
  annotations: null,
  disabled: false,
  fillImageSrc: null,
  href: null,
  imageBorder: null,
  imageStyle: null,
  imageSrc: null,
  layout: FEATURE_CARD_LAYOUTS.auto,
  onClick: null,
  title: null,
};

export default withStyledTheme(FeatureCard);

export { FeatureCard as FeatureCardWithoutTheme };
