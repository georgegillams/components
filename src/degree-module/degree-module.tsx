import React from 'react';

import {
  BarWrapper,
  Marker,
  ModuleName,
  Percentage,
  ProgressBar,
  Wrapper,
} from './degree-module.styles';

export interface DegreeModuleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  percentage?: number;
  filled?: boolean;
  markerPosition?: number;
}

const DegreeModule = (props: DegreeModuleProps) => {
  const { name, markerPosition, percentage, filled = true, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <ModuleName>{name}</ModuleName>
      <BarWrapper>
        <ProgressBar
          progress={filled ? percentage || 0 : 0}
          aria-label={`Degree percentage - ${
            percentage ? `${percentage}%` : 'pending'
          }`}
        />
        {markerPosition && (
          <Marker
            style={{ marginLeft: `calc(${markerPosition}% - .175rem)` }}
          />
        )}
      </BarWrapper>
      <Percentage showFilled={filled && !!percentage && percentage > 0.01}>
        {`${percentage || '00'}%`}
      </Percentage>
    </Wrapper>
  );
};

export default DegreeModule;
