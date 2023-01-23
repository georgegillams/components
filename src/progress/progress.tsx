import React from 'react';
import PropTypes from 'prop-types';
import { Inner, Outer } from './progress.styles';
import withStyledTheme from '../styled-theming';

export interface ProgressProps {
  progress: number;
  max?: number;
  theme?: any;
}

const Progress = (props: ProgressProps) => {
  const { progress, max = 100, theme, ...rest } = props;

  const cappedProgress = Math.min(max, progress);
  const progressPercentage = (100 * cappedProgress) / max;

  return (
    <Outer
      aria-valuenow={cappedProgress}
      aria-valuemin={0}
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

export default withStyledTheme<ProgressProps>(Progress);

export { Progress as ProgressWithoutTheme };
