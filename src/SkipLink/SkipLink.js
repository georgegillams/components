import PropTypes from 'prop-types';
import React from 'react';

import { cssModules } from '../helpers/cssModules';

import STYLES from './skip-link.scss';

const getClassName = cssModules(STYLES);

const SkipLink = (props) => {
  const { label, href, className, ...rest } = props;

  return (
    <a href={href} className={getClassName('skip-link', className)} {...rest}>
      {label}
    </a>
  );
};

SkipLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SkipLink.defaultProps = {
  className: null,
};

export default SkipLink;
