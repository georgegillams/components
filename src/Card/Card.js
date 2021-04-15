import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './card.scss';

const getClassName = cssModules(STYLES);

const Card = React.forwardRef((props, ref) => {
  const {
    href,
    onClick,
    padded,
    fillImageSrc,
    light,
    ariaLabel,
    className,
    backgroundImageClassName,
    children,
    disabled,
    onHoverChanged,
    highlighted,
    atomic,
    ...rest
  } = props;

  const cardClassNames = [getClassName('card', className)];

  const backgroundImageClassNames = [getClassName('card__background')];
  if (highlighted) {
    backgroundImageClassNames.push(
      getClassName('card__background--highlighted'),
    );
  }
  if (atomic) {
    cardClassNames.push(getClassName('card--atomic'));
  }
  if (disabled) {
    cardClassNames.push(getClassName('card--disabled'));
    backgroundImageClassNames.push(getClassName('card__background--disabled'));
  } else {
    cardClassNames.push(getClassName('card--not-disabled'));
  }
  if (light) {
    backgroundImageClassNames.push(getClassName('card__background--light'));
  }
  if (backgroundImageClassName) {
    backgroundImageClassNames.push(backgroundImageClassName);
  }
  const outerClassNames = [getClassName('card__outer-container')];
  const contentClassNames = [getClassName('card__content-container')];
  if (padded) {
    contentClassNames.push(getClassName('card__content-container--padded'));
  }

  const cardContent = (
    <div className={outerClassNames.join(' ')}>
      <div
        className={backgroundImageClassNames.join(' ')}
        style={fillImageSrc ? { backgroundImage: `url(${fillImageSrc})` } : {}}
      />
      <div className={contentClassNames.join(' ')}>{children}</div>
    </div>
  );

  const tabIndex = atomic ? 0 : -1;

  if (href && !disabled) {
    return (
      <a
        tabIndex={tabIndex}
        href={href}
        className={cardClassNames.join(' ')}
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        {cardContent}
      </a>
    );
  }

  const onPress = e => {
    if (e.key === 'Enter') {
      onClick(e);
    }
  };

  return (
    <button
      tabIndex={tabIndex}
      type="button"
      aria-disabled={disabled ? 'true' : null}
      className={cardClassNames.join(' ')}
      onClick={disabled ? null : onClick}
      onKeyPress={disabled ? null : onPress}
      ref={ref}
      {...rest}
    >
      {cardContent}
    </button>
  );
});

Card.propTypes = {
  ariaLabel: PropTypes.string,
  backgroundImageClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fillImageSrc: PropTypes.node,
  href: PropTypes.string,
  light: PropTypes.bool,
  onClick: PropTypes.func,
  onHoverChanged: PropTypes.func,
  padded: PropTypes.bool,
  highlighted: PropTypes.bool,
  atomic: PropTypes.bool,
};

Card.defaultProps = {
  ariaLabel: null,
  backgroundImageClassName: null,
  children: null,
  className: null,
  disabled: false,
  fillImageSrc: null,
  href: null,
  light: false,
  onClick: null,
  onHoverChanged: null,
  padded: true,
  highlighted: false,
  atomic: true,
};

export default Card;
