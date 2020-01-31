import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from '../Typography';
import { cssModules } from '../helpers/cssModules';

import STYLES from './countdown.scss';

const getClassName = cssModules(STYLES);

const CountdownDivider = props => {
  const { textClassName, className, ...rest } = props;

  const classNames = [
    getClassName('countdown__divider', className),
    textClassName,
  ];

  return (
    <Paragraph aria-hidden="true" className={classNames.join(' ')} {...rest}>
      {':'}
    </Paragraph>
  );
};

CountdownDivider.propTypes = {
  className: PropTypes.string,
};

CountdownDivider.defaultProps = {
  className: null,
};

export default CountdownDivider;
