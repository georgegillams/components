import React from 'react';
import { bladeCount, Outer, Spoke } from './spinner.styles';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  light?: boolean;
  large?: boolean;
}

const Spinner = (props: SpinnerProps) => {
  const { large = false, light = false, ...rest } = props;

  return (
    <Outer large={large} light={light} {...rest}>
      {[...new Array(bladeCount)].map((_, key) => (
        <Spoke index={key} key={key} large={large} />
      ))}
    </Outer>
  );
};

export default Spinner;
