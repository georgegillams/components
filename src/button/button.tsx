import React, { MouseEvent, MouseEventHandler, useState } from 'react';

import Spinner from '../spinner';

import { BUTTON_SIZES, BUTTON_TYPES } from './constants';
import {
  StyledButton,
  StyledLink,
  LoadingSpinner,
  ChildContainer,
} from './button.styles';
import withStyledTheme from '../styled-theming';

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  hrefExternal?: boolean;
  buttonType?: BUTTON_TYPES;
  size?: BUTTON_SIZES;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  loading?: boolean;
  anchorComponent?: React.ComponentType;
}

const Button = React.forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const [showDestructiveConfirmation, setShowDestructiveConfirmation] =
    useState(false);

  const {
    href,
    hrefExternal,
    buttonType = BUTTON_TYPES.primary,
    size = BUTTON_SIZES.regular,
    disabled: disabledProp,
    onClick,
    children,
    loading,
    anchorComponent,
    ...rest
  } = props;

  const disabled = disabledProp || loading;

  const targettingProps = hrefExternal
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  const OuterLink = anchorComponent || StyledLink;

  if (href && !disabled) {
    return (
      <OuterLink
        aria-label={children}
        href={href}
        onClick={onClick}
        // @ts-ignore
        ref={ref}
        buttonType={buttonType}
        size={size}
        disabled={disabled}
        {...targettingProps}
        {...rest}
      >
        <ChildContainer>{children}</ChildContainer>
      </OuterLink>
    );
  }

  let onClickFinal = onClick;
  if (disabled) {
    onClickFinal = undefined;
  }

  const onDestructiveClickFinal = (event: MouseEvent<HTMLElement>) => {
    if (showDestructiveConfirmation && onClickFinal) {
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
      size={size}
      // @ts-ignore
      ref={ref}
      {...rest}
    >
      <ChildContainer $loading={loading}>
        {showDestructiveConfirmation && 'Click again to confirm '}
        {children}
      </ChildContainer>
      {loading && (
        <LoadingSpinner aria-hidden>
          <Spinner />
        </LoadingSpinner>
      )}
    </StyledButton>
  );
});

export default withStyledTheme(Button);

export { Button as ButtonWithoutTheme };
