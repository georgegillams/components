import React from 'react';
import PropTypes from 'prop-types';

import {
  BarWrapper,
  Marker,
  ModuleName,
  Percentage,
  ProgressBar,
  Wrapper,
} from './degree-module.styles';

const DegreeModule = (props) => {
  const { name, markerPosition, percentage, filled, ...rest } = props;

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
      <Percentage showFilled={filled && percentage && percentage > 0.01}>
        {`${percentage || '00'}%`}
      </Percentage>
    </Wrapper>
  );
};

DegreeModule.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  filled: PropTypes.bool,
  className: PropTypes.string,
  markerPosition: PropTypes.number,
};

DegreeModule.defaultProps = {
  filled: true,
  className: null,
  percentage: null,
  markerPosition: null,
};

export default DegreeModule;
