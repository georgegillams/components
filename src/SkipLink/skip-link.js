import PropTypes from 'prop-types';
import React from 'react';
import { Link, StyledSkipLink, Wrapper } from './skip-link.styles';

const SkipLink = (props) => {
  const { label, href, className, ...rest } = props;

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
