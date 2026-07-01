import React from 'react';
import {
  ChildrenContainer,
  BackgroundImageContainer,
  ContentOuterWrapper,
  OuterButton,
  OuterDiv,
  OuterLink,
  CardOverlayLink,
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
    hrefExternal,
    onClick,
    padded = true,
    fillImageSrc,
    light,
    ariaLabel,
    backgroundImageStyle,
    children,
    disabled,
    atomic = true,
    highlighted,
    theme,
    anchorComponent,
    ...rest
  } = props;

  const showOverlayLink = Boolean(href && !disabled && !atomic);

  const targettingProps = hrefExternal
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  const cardContent = (
    <ContentOuterWrapper
      highlighted={highlighted}
      disabled={disabled}
      theme={theme}
    >
      {showOverlayLink && (
        <CardOverlayLink
          href={href}
          tabIndex={-1}
          aria-hidden="true"
          {...targettingProps}
        />
      )}
      <BackgroundImageContainer
        fillImageSrc={fillImageSrc}
        style={backgroundImageStyle}
      />
      <ChildrenContainer padded={padded} hasOverlayLink={showOverlayLink}>
        {children}
      </ChildrenContainer>
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
  const interactive = Boolean(href || onClick);

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
        atomic={atomic}
        interactive={interactive}
        {...atomicProps}
        {...rest}
      >
        {cardContent}
      </OuterWrapper>
    );
  }

  if (atomic && !href && !onClick) {
    return (
      <OuterDiv
        // @ts-ignore
        ref={ref}
        disabled={disabled}
        atomic={atomic}
        interactive={interactive}
        {...rest}
      >
        {cardContent}
      </OuterDiv>
    );
  }

  return (
    <OuterButton
      aria-disabled={disabled ? 'true' : undefined}
      onClick={disabled ? undefined : onClick}
      // @ts-ignore
      ref={ref}
      disabled={disabled}
      atomic={atomic}
      interactive={interactive}
      {...atomicProps}
      {...rest}
    >
      {cardContent}
    </OuterButton>
  );
});

export default withStyledTheme(Card);

export { Card as CardWithoutTheme };
