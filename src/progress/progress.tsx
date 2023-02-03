import React from 'react';
import { Inner, Outer } from './progress.styles';
import withStyledTheme from '../styled-theming';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  progress: number;
  max?: number;
  theme?: any;
}

const Progress = (props: ProgressProps) => {
  const { progress, max = 100, theme, ...rest } = props;

  const cappedProgress = Math.min(max, progress);
  const progressPercentage = (100 * cappedProgress) / max;

  return (
    // @ts-ignore
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

export default withStyledTheme<ProgressProps>(Progress);

export { Progress as ProgressWithoutTheme };
