import React from 'react';
import PropTypes from 'prop-types';
import { Inner, Outer } from './progress.styles';
import withStyledTheme from '../styled-theming';

const Progress = (props) => {
  const { error, progress, max, theme, ...rest } = props;

  const cappedProgress = Math.min(max, progress);
  const progressPercentage = (100 * cappedProgress) / max;

  return (
    <Outer
      aria-valuenow={cappedProgress}
      aria-valuemin="0"
      aria-valuemax={max}
      {...rest}
    >
      <Inner progressPercentage={progressPercentage} theme={theme} />
    </Outer>
  );
};

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  max: PropTypes.number,
};

Progress.defaultProps = {
  max: 100,
};

export default withStyledTheme(Progress);
