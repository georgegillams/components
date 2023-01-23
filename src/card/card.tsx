import React, { RefObject } from 'react';
import PropTypes from 'prop-types';
import {
  ChildrenContainer,
  BackgroundImageContainer,
  ContentOuterWrapper,
  OuterButton,
  OuterLink,
} from './card.styles';
import withStyledTheme from '../styled-theming';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  hrefExternal?: boolean;
  onClick?: (event: React.MouseEvent<any>) => void;
  padded?: boolean;
  fillImageSrc?: string;
  light?: boolean;
  ariaLabel?: string;
  backgroundImageStyle?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  atomic?: boolean;
  highlighted?: boolean;
  theme?: any;
  anchorComponent?: React.ComponentType;
}

const Card = React.forwardRef((props: CardProps, ref) => {
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
    highlighted,
    theme,
    anchorComponent,
    ...rest
  } = props;

  const cardContent = (
    <ContentOuterWrapper
      highlighted={highlighted}
      disabled={disabled}
      theme={theme}
    >
      <BackgroundImageContainer
        fillImageSrc={fillImageSrc}
        style={backgroundImageStyle}
      />
      <ChildrenContainer padded={padded}>{children}</ChildrenContainer>
    </ContentOuterWrapper>
  );

  // If atomic, enable keyboard focus and don't mess with roles.
  // If non-atomic, disable keyboard focus and use article role.
  const atomicProps: {
    role?: string;
    tabIndex?: number;
  } = {};

  if (!atomic) {
    atomicProps.role = 'group';
    atomicProps.tabIndex = -1;
  }

  if (disabled) {
    atomicProps.tabIndex = -1;
  }

  const OuterWrapper =
    atomic && anchorComponent && href && !disabled
      ? anchorComponent
      : OuterLink;

  if (href && !disabled) {
    return (
      <OuterWrapper
        // @ts-ignore
        as={atomic ? 'a' : 'div'}
        href={href}
        onClick={onClick}
        // @ts-ignore
        ref={ref}
        disabled={disabled}
        {...atomicProps}
        {...rest}
      >
        {cardContent}
      </OuterWrapper>
    );
  }

  return (
    <OuterButton
      aria-disabled={disabled ? 'true' : undefined}
      onClick={disabled ? undefined : onClick}
      // @ts-ignore
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
  fillImageSrc: PropTypes.string,
  href: PropTypes.string,
  light: PropTypes.bool,
  onClick: PropTypes.func,
  padded: PropTypes.bool,
  atomic: PropTypes.bool,
  highlighted: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  // @ts-ignore
  anchorComponent: PropTypes.elementType,
};

Card.defaultProps = {
  ariaLabel: undefined,
  backgroundImageStyle: undefined,
  children: undefined,
  disabled: false,
  fillImageSrc: undefined,
  href: undefined,
  light: false,
  onClick: undefined,
  padded: true,
  atomic: true,
  highlighted: false,
  anchorComponent: undefined,
};

export default withStyledTheme(Card);

export { Card as CardWithoutTheme };
