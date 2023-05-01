import React, { useMemo } from 'react';
import SpartanMedal, { SpartanMedalProps } from './spartan-medal';
import SpartanMedal2023 from './spartan-medal-2023';

const SpartanMedalSelector = (props: SpartanMedalProps) => {
  const { year } = props;

  const MedalComponent = useMemo(() => {
    if (year === '2023') {
      return SpartanMedal2023;
    }

    return SpartanMedal;
  }, [year]);

  return <MedalComponent {...props} />;
};

export default SpartanMedalSelector;
