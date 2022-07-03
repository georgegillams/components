import React from 'react';
import PropTypes from 'prop-types';
import {
  ChildrenContainer,
  ContentInnerWrapper,
  ContentOuterWrapper,
  OuterButton,
  OuterLink,
} from './card.styles';

const Card = React.forwardRef((props, ref) => {
  const {
    href,
    onClick,
    padded,
    fillImageSrc,
    light,
    ariaLabel,
    backgroundImageStyle,
    children,
    disabled,
    atomic,
    ...rest
  } = props;

  const cardContent = (
    <ContentOuterWrapper disabled={disabled}>
      <ContentInnerWrapper fillImageSrc={fillImageSrc} />
      <ChildrenContainer padded={padded}>{children}</ChildrenContainer>
    </ContentOuterWrapper>
  );

  // If atomic, enable keyboard focus and don't mess with roles.
  // If non-atomic, disable keyboard focus and use article role.
  const atomicProps = {};

  if (!atomic) {
    atomicProps.role = 'group';
    atomicProps.tabIndex = -1;
  }

  if (disabled) {
    atomicProps.tabIndex = -1;
  }

  if (href && !disabled) {
    return (
      <OuterLink
        href={href}
        onClick={onClick}
        ref={ref}
        disabled={disabled}
        {...atomicProps}
        {...rest}
      >
        {cardContent}
      </OuterLink>
    );
  }

  const onPress = (e) => {
    if (e.key === 'Enter') {
      onClick(e);
    }
  };

  return (
    <OuterButton
      aria-disabled={disabled ? 'true' : null}
      onClick={disabled ? null : onClick}
      onKeyPress={disabled ? null : onPress}
      ref={ref}
      disabled={disabled}
      {...atomicProps}
      {...rest}
    >
      {cardContent}
    </OuterButton>
  );
});

Card.propTypes = {
  ariaLabel: PropTypes.string,
  backgroundImageStyle: PropTypes.object,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fillImageSrc: PropTypes.node,
  href: PropTypes.string,
  light: PropTypes.bool,
  onClick: PropTypes.func,
  padded: PropTypes.bool,
  atomic: PropTypes.bool,
};

Card.defaultProps = {
  ariaLabel: null,
  backgroundImageStyle: null,
  children: null,
  disabled: false,
  fillImageSrc: null,
  href: null,
  light: false,
  onClick: null,
  padded: true,
  atomic: true,
};

export default Card;
