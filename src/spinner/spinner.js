import React from 'react';
import PropTypes from 'prop-types';
import { bladeCount, Outer, Spoke } from './spinner.styles';

const Spinner = (props) => {
  const { large, light, ...rest } = props;

  return (
    <Outer large={large} light={light} {...rest}>
      {[...new Array(bladeCount)].map((_, key) => (
        <Spoke index={key} large={large} light={light} />
      ))}
    </Outer>
  );
};

Spinner.propTypes = {
  light: PropTypes.bool,
  large: PropTypes.bool,
};

Spinner.defaultProps = {
  light: false,
  large: false,
};

export default Spinner;
