import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner';

import { BUTTON_SIZES, BUTTON_TYPES } from './constants';
import {
  StyledButton,
  StyledLink,
  LoadingSpinner,
  ChildContainer,
} from './button.styles';
import withStyledTheme from '../styled-theming';

const getClassName = (c) => c;

const Button = React.forwardRef((props, ref) => {
  const [showDestructiveConfirmation, setShowDestructiveConfirmation] =
    useState(false);

  const {
    href,
    hrefExternal,
    buttonType,
    disabled: disabledProp,
    onClick,
    children,
    loading,
    ...rest
  } = props;

  const disabled = disabledProp || loading;

  const targettingProps = hrefExternal
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  if (href && !disabled) {
    return (
      <StyledLink
        aria-label={children}
        href={href}
        onClick={onClick}
        ref={ref}
        className={getClassName('button__a', 'outerClassName')}
        buttonType={buttonType}
        disabled={disabled}
        {...targettingProps}
        {...rest}
      >
        <ChildContainer>{children}</ChildContainer>
      </StyledLink>
    );
  }

  let onClickFinal = onClick;
  if (disabled) {
    onClickFinal = null;
  }

  const onDestructiveClickFinal = (event) => {
    if (showDestructiveConfirmation) {
      setShowDestructiveConfirmation(false);
      onClickFinal(event);
    } else {
      setShowDestructiveConfirmation(true);
      setTimeout(() => {
        setShowDestructiveConfirmation(false);
      }, 7500);
    }
  };

  return (
    <StyledButton
      type="button"
      disabled={disabled}
      onClick={
        buttonType === BUTTON_TYPES.destructive
          ? onDestructiveClickFinal
          : onClickFinal
      }
      className={'outer'}
      buttonType={buttonType}
      ref={ref}
      {...rest}
    >
      <ChildContainer loading={loading}>
        {showDestructiveConfirmation && 'Click again to confirm '}
        {children}
      </ChildContainer>
      {loading && (
        <LoadingSpinner
          aria-hidden
          className={getClassName('button__loading-spinner')}
        >
          <Spinner />
        </LoadingSpinner>
      )}
    </StyledButton>
  );
});

Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(BUTTON_SIZES)),
  buttonType: PropTypes.oneOf(Object.keys(BUTTON_TYPES)),
  href: PropTypes.string,
  hrefExternal: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  size: BUTTON_SIZES.regular,
  buttonType: BUTTON_TYPES.primary,
  href: null,
  hrefExternal: false,
  loading: false,
  disabled: false,
  onClick: null,
  children: null,
};

export default withStyledTheme(Button);

export { Button as ButtonWithoutTheme };
