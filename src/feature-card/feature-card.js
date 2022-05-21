import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import Section from '../section';
import Subsection from '../subsection';
import Card from '../card';
import Image from '../image';

import STYLES from './feature-card.scss';

const getClassName = cssModules(STYLES);

export const FEATURE_CARD_LAYOUTS = {
  auto: 'auto',
  narrow: 'narrow',
  narrowCompact: 'narrowCompact',
};

const FeatureCard = React.forwardRef((props, ref) => {
  const {
    annotations,
    ariaLabel,
    children,
    imageBorder,
    imageClassName,
    imageSrc,
    layout,
    title,

    className,
    disabled,
    backgroundImageClassName,

    ...rest
  } = props;

  const classNameFinal = [getClassName('feature-card')];
  const centerClassNames = [getClassName('feature-card__center-container')];
  const contentContainerClassNames = [
    getClassName('feature-card__inner-container'),
  ];
  const dateContainerClassNames = [getClassName('feature-card__date')];

  if (disabled) {
    contentContainerClassNames.push(
      getClassName('feature-card__inner-container--disabled'),
    );
  }

  const outerBannerClassNames = [getClassName('feature-card__outer-container')];
  if (layout === FEATURE_CARD_LAYOUTS.narrowCompact) {
    classNameFinal.push(getClassName('feature-card--narrow-compact'));
    outerBannerClassNames.push(
      getClassName('feature-card__outer-container--narrow-compact'),
    );
    centerClassNames.push(
      getClassName('feature-card__center-container--narrow-compact'),
    );
    dateContainerClassNames.push(
      getClassName('feature-card__date--narrow-compact'),
    );
  } else if (layout === FEATURE_CARD_LAYOUTS.auto) {
    outerBannerClassNames.push(
      getClassName('feature-card__outer-container--auto'),
    );
  }
  if (className) classNameFinal.push(className);

  const imageContainerClassNames = [
    getClassName('feature-card__image-container'),
  ];

  const imageClassNames = [getClassName('feature-card__image')];
  if (disabled) {
    imageClassNames.push(getClassName('feature-card__image--disabled'));
  }
  if (imageClassName) {
    imageClassNames.push(imageClassName);
  }

  const backgroundImageClassNames = [getClassName('feature-card__background')];
  if (backgroundImageClassName) {
    backgroundImageClassNames.push(backgroundImageClassName);
  }

  const cardContent = (
    <div className={outerBannerClassNames.join(' ')} aria-hidden="true">
      <div className={dateContainerClassNames.join(' ')}>
        {annotations && annotations.map && (
          <>
            {/* Note we're using an additional div here to apply the className
            due to an issue with className ordering in next.js */}
            <div
              className={getClassName(
                'feature-card__annotation',
                'feature-card__annotation--mobile',
              )}
            >
              <Subsection
                inheritColor
                disabled={disabled}
                anchor={false}
                padding={false}
                name={annotations.join(' ')}
              />
            </div>
            {annotations.map((annotation) => (
              <div
                className={getClassName(
                  'feature-card__annotation',
                  'feature-card__annotation--tablet',
                )}
              >
                <Subsection
                  inheritColor
                  key={annotation}
                  disabled={disabled}
                  anchor={false}
                  padding={false}
                  name={annotation}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <div className={centerClassNames.join(' ')}>
        <Section
          inheritColor
          padding={false}
          disabled={disabled}
          name={title}
          className={getClassName('feature-card__title')}
        />
        {children && (
          <div className={getClassName('feature-card__children')}>
            {children}
          </div>
        )}
      </div>
      {imageSrc && (
        <div
          className={imageContainerClassNames.join(' ')}
          style={{
            border: imageBorder ? `solid ${imageBorder} 0.1rem` : 'none',
          }}
        >
          <Image
            className={imageClassNames.join(' ')}
            aspectX={1}
            aspectY={1}
            imgProps={{
              alt: 'card',
            }}
            lightSrc={imageSrc}
            darkSrc={imageSrc}
          />
        </div>
      )}
    </div>
  );

  return (
    <Card
      aria-label={ariaLabel || title}
      className={classNameFinal.join(' ')}
      disabled={disabled}
      backgroundImageClassName={backgroundImageClassName}
      ref={ref}
      {...rest}
    >
      {cardContent}
    </Card>
  );
});

FeatureCard.propTypes = {
  ariaLabel: PropTypes.string,
  backgroundImageClassName: PropTypes.string,
  bannerColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  annotations: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  fillImageSrc: PropTypes.node,
  href: PropTypes.string,
  imageBorder: PropTypes.string,
  imageClassName: PropTypes.string,
  imageSrc: PropTypes.node,
  layout: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

FeatureCard.defaultProps = {
  ariaLabel: null,
  backgroundImageClassName: null,
  bannerColor: null,
  children: null,
  className: null,
  annotations: null,
  disabled: false,
  fillImageSrc: null,
  href: null,
  imageBorder: null,
  imageClassName: null,
  imageSrc: null,
  layout: FEATURE_CARD_LAYOUTS.auto,
  onClick: null,
  title: null,
};

export default FeatureCard;
