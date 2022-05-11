import React from 'react';
import PropTypes from 'prop-types';
import { Inner, Outer } from './progress.styles';

const Progress = (props) => {
  const { error, progress, max, ...rest } = props;

  const cappedProgress = Math.min(max, progress);
  const progressPercentage = (100 * cappedProgress) / max;

  return (
    <Outer
      aria-valuenow={cappedProgress}
      aria-valuemin="0"
      aria-valuemax={max}
      {...rest}
    >
      <Inner progressPercentage={progressPercentage} />
    </Outer>
  );
};

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  children: PropTypes.node,
  error: PropTypes.bool,
  max: PropTypes.number,
};

Progress.defaultProps = {
  children: null,
  error: false,
  max: 100,
};

export default Progress;
