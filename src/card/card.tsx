import React from 'react';
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

const Card = React.forwardRef<HTMLElement, CardProps>((props, ref) => {
  const {
    href,
    onClick,
    padded = true,
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

  const OuterWrapper = anchorComponent || OuterLink;

  if (href && !disabled) {
    return (
      <OuterWrapper
        // @ts-ignore
        as={atomic ? 'a' : 'div'}
        href={atomic ? href : undefined}
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

export default withStyledTheme(Card);

export { Card as CardWithoutTheme };
