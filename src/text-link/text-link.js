import React from 'react';
import PropTypes from 'prop-types';

import withStyledTheme from '../styled-theming';
import { Anchor, IconContainer, Icon } from './text-link.styles';

const TextLink = React.forwardRef((props, ref) => {
  const { href, hrefExternal, children, onClick, theme, ...rest } = props;

  const targettingProps = hrefExternal
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <Anchor
      as="a"
      theme={theme}
      href={href}
      onClick={onClick}
      ref={ref}
      aria-label={hrefExternal ? `${children} (opens in a new tab)` : null}
      {...targettingProps}
      {...rest}
    >
      {children}
      {hrefExternal && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
    </Anchor>
  );
});

TextLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  href: PropTypes.string,
  hrefExternal: PropTypes.bool,
  theme: PropTypes.object,
};

TextLink.defaultProps = {
  onClick: null,
  href: null,
  hrefExternal: false,
  children: null,
  theme: null,
};

export default withStyledTheme(TextLink);

export { TextLink as TextLinkWithoutTheme };
