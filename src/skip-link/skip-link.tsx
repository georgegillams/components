import PropTypes from 'prop-types';
import React from 'react';
import { Link, Wrapper } from './skip-link.styles';

export interface SkipLinkProps {
  label: string;
  href: string;
}

const SkipLink = (props: SkipLinkProps) => {
  const { label, href, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <Link href={href}>{label}</Link>
    </Wrapper>
  );
};

SkipLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

SkipLink.defaultProps = {};

export default SkipLink;
