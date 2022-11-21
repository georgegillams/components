import React from 'react';
import PropTypes from 'prop-types';

import withStyledTheme from '../styled-theming';
import { Anchor, IconContainer, Icon } from './text-link.styles';
import Text from '../text';

const TextLink = React.forwardRef((props, ref) => {
  const {
    href,
    hrefExternal,
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

  return (
    <OuterWrapper
      theme={theme}
      href={href}
      onClick={onClick}
      ref={ref}
      aria-label={hrefExternal ? `${children} (opens in a new tab)` : null}
      {...targettingProps}
      {...rest}
    >
      <Text>{children}</Text>
      {hrefExternal && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
    </OuterWrapper>
  );
});

TextLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  href: PropTypes.string,
  hrefExternal: PropTypes.bool,
  theme: PropTypes.object,
  anchorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

TextLink.defaultProps = {
  onClick: null,
  href: null,
  hrefExternal: false,
  children: null,
  theme: null,
  anchorComponent: null,
};

export default withStyledTheme(TextLink);

export { TextLink as TextLinkWithoutTheme };
