import React from 'react';
import PropTypes from 'prop-types';

import withStyledTheme from '../styled-theming';
import { Anchor, IconContainer, Icon } from './text-link.styles';
import Text from '../text';

export interface TextLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  href?: string;
  hrefExternal?: boolean;
  theme?: any;
  anchorComponent?: React.ComponentType;
}

const TextLink = React.forwardRef((props: TextLinkProps, ref: any) => {
  const {
    href,
    hrefExternal = false,
    children,
    onClick,
    theme,
    anchorComponent,
    ...rest
  } = props;

  const targettingProps = hrefExternal
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  const OuterWrapper = anchorComponent || Anchor;

  const content = hrefExternal ? (
    <>
      <Text>{children}</Text>
      <IconContainer>
        <Icon />
      </IconContainer>
    </>
  ) : (
    <Text>{children}</Text>
  );

  return (
    <OuterWrapper
      theme={theme}
      href={href}
      onClick={onClick}
      ref={ref}
      aria-label={hrefExternal ? `${children} (opens in a new tab)` : undefined}
      {...targettingProps}
      {...rest}
    >
      {content}
    </OuterWrapper>
  );
});

export default withStyledTheme(TextLink);

export { TextLink as TextLinkWithoutTheme };
