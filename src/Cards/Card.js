import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { cssModules } from '../helpers/cssModules';

import STYLES from './card.scss';

const getClassName = cssModules(STYLES);

const Card = props => {
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);

  const {
    linkUrl,
    href,
    onClick,
    padded,
    bannerColor,
    fillImageSrc,
    light,
    ariaLabel,
    className,
    backgroundImageClassName,
    children,
    disabled,
    onHoverChanged,
    ...rest
  } = props;

  const propagate = newValue => {
    if (onHoverChanged) {
      onHoverChanged(newValue);
    }
  };

  const hoverStarted = () => {
    const newValue = true;
    setHovering(newValue);
    propagate(focused || newValue);
  };

  const hoverEnded = () => {
    const newValue = false;
    setHovering(newValue);
    propagate(focused || newValue);
  };

  const focusStarted = () => {
    const newValue = true;
    setFocused(newValue);
    propagate(hovering || newValue);
  };

  const focusEnded = () => {
    const newValue = false;
    setFocused(newValue);
    propagate(hovering || newValue);
  };

  const focusedState = hovering || focused;

  const cardClassNames = [getClassName('card')];

  if (disabled) {
    cardClassNames.push(getClassName('card--disabled'));
  }

  const bannerClassNames = [getClassName('card__banner')];
  if (light) {
    bannerClassNames.push(getClassName('card__banner--light'));
  }
  if (focusedState && !disabled) {
    bannerClassNames.push(getClassName('card__banner--hovered'));
  }
  const outerBannerClassNames = [getClassName('card__outer-container')];
  if (padded) {
    outerBannerClassNames.push(getClassName('card__outer-container--padded'));
  }

  const backgroundImageClassNames = [getClassName('card__background')];
  if (light) {
    backgroundImageClassNames.push(getClassName('card__background--light'));
  }
  if (backgroundImageClassName) {
    backgroundImageClassNames.push(backgroundImageClassName);
  }

  let cardComponent = (
    <div className={cardClassNames.join(' ')}>
      <div
        className={backgroundImageClassNames.join(' ')}
        style={{ backgroundImage: `url(${fillImageSrc})` }}
      />
      <div className={outerBannerClassNames.join(' ')}>{children}</div>
      <div
        className={bannerClassNames.join(' ')}
        style={bannerColor ? { backgroundColor: bannerColor } : {}}
      />
    </div>
  );

  if (linkUrl) {
    cardComponent = (
      <Link
        aria-disabled={disabled ? 'true' : null}
        style={{ textDecoration: 'none' }}
        role="button"
        aria-label={ariaLabel}
        to={disabled ? 'false' : linkUrl}
      >
        {cardComponent}
      </Link>
    );
  } else if (href && !disabled) {
    cardComponent = (
      <a
        aria-disabled={disabled ? 'true' : null}
        style={{ textDecoration: 'none' }}
        role="button"
        rel="noopener noreferrer"
        target="_blank"
        href={href}
      >
        {cardComponent}
      </a>
    );
  }

  return (
    <div
      tabIndex="0"
      role="button"
      aria-disabled={disabled ? 'true' : null}
      onMouseEnter={hoverStarted}
      onFocus={focusStarted}
      onMouseLeave={hoverEnded}
      onBlur={focusEnded}
      className={className}
      onClick={disabled ? null : onClick}
      onKeyDown={disabled ? null : onClick}
      {...rest}
    >
      {cardComponent}
    </div>
  );
};

Card.propTypes = {
  ariaLabel: PropTypes.string,
  backgroundImageClassName: PropTypes.string,
  bannerColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fillImageSrc: PropTypes.node,
  href: PropTypes.string,
  light: PropTypes.bool,
  linkUrl: PropTypes.string,
  onClick: PropTypes.func,
  onHoverChanged: PropTypes.func,
  padded: PropTypes.bool,
};

Card.defaultProps = {
  ariaLabel: null,
  backgroundImageClassName: null,
  bannerColor: null,
  children: null,
  className: null,
  disabled: false,
  fillImageSrc: null,
  href: null,
  light: false,
  linkUrl: null,
  onClick: null,
  onHoverChanged: null,
  padded: true,
};

export default Card;
