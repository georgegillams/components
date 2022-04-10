import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './spinner.scss';

const getClassName = cssModules(STYLES);

const Spinner = (props) => {
  const { large, light, className, ...rest } = props;

  const outerClassNames = [getClassName('spinner__outer')];
  const innerClassNames = [getClassName('spinner__inner')];

  if (large) {
    outerClassNames.push(getClassName('spinner__outer--large'));
    innerClassNames.push(getClassName('spinner__inner--large'));
  }

  if (light) {
    outerClassNames.push(getClassName('spinner__outer--light'));
  }

  if (className) {
    outerClassNames.push(className);
  }

  const outerClassNamesFinal = outerClassNames.join(' ');
  const innerClassNamesFinal = innerClassNames.join(' ');

  return (
    <div className={outerClassNamesFinal} {...rest}>
      <div className={innerClassNamesFinal} />
      <div className={innerClassNamesFinal} />
      <div className={innerClassNamesFinal} />
      <div className={innerClassNamesFinal} />
      <div className={innerClassNamesFinal} />
      <div className={innerClassNamesFinal} />
      <div className={innerClassNamesFinal} />
      <div className={innerClassNamesFinal} />
    </div>
  );
};

Spinner.propTypes = {
  light: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
};

Spinner.defaultProps = {
  light: false,
  large: false,
  className: null,
};

export default Spinner;
