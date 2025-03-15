import PropTypes from 'prop-types';
import React from 'react';
import { Link, Wrapper } from './skip-link.styles';
import { StyledThemeProvider } from '../styled-theming';

export interface SkipLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  href: string;
}

const SkipLink = (props: SkipLinkProps) => {
  const { label, href, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <StyledThemeProvider
        theme={{
          focusOutlineColor: 'white',
          focusOutlineColorDarkMode: 'white',
        }}
      >
        <Link href={href}>{label}</Link>
      </StyledThemeProvider>
    </Wrapper>
  );
};

export default SkipLink;
