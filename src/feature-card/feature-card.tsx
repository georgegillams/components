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
import Text, { SIZES, TAG_NAME } from '../text';
import { FEATURE_CARD_LAYOUTS } from './constants';

export interface FeatureCardProps {
  annotations?: string[];
  ariaLabel?: string;
  imageBorder?: string;
  imageStyle?: React.CSSProperties;
  imageSrc?: string;
  layout?: FEATURE_CARD_LAYOUTS;
  title: string;
  disabled?: boolean;
  backgroundImageStyle?: React.CSSProperties;
  href?: string;
  hrefExternal?: boolean;
  highlighted?: boolean;
  children?: React.ReactNode;
  fillImageSrc?: string;
  light?: boolean;
  anchorComponent?: React.ComponentType;
}

const FeatureCard = React.forwardRef<HTMLElement, FeatureCardProps>(
  (props, ref) => {
    const {
      annotations,
      ariaLabel,
      children,
      imageBorder,
      imageStyle,
      imageSrc,
      layout = FEATURE_CARD_LAYOUTS.auto,
      title,

      disabled,
      backgroundImageStyle,

      ...rest
    } = props;

    const cardContent = (
      <OuterContainer layout={layout} aria-hidden="true">
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
          <Text size={SIZES.xl} tagName={TAG_NAME.h2}>
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
        // @ts-ignore
        ref={ref}
        layout={layout}
        {...rest}
      >
        {cardContent}
      </StyledCard>
    );
  },
);

export default withStyledTheme(FeatureCard);

export { FeatureCard as FeatureCardWithoutTheme };
