import React, { useMemo } from 'react';
import SpartanMedal, { SpartanMedalProps } from './spartan-medal';
import SpartanMedal2023 from './spartan-medal-2023';
import SpartanMedal2024 from './spartan-medal-2024';
import SpartanMedal2025 from './spartan-medal-2025';
import SpartanUltraMedal2025 from './spartan-ultra-medal-2025';

const SpartanMedalSelector = (props: SpartanMedalProps) => {
  const { year, type } = props;

  const MedalComponent = useMemo(() => {
    if (year === '2023') {
      return SpartanMedal2023;
    }

    if (year === '2024') {
      return SpartanMedal2024;
    }

    if (year === '2025') {
      if (type === 'ultra') {
        return SpartanUltraMedal2025;
      }

      return SpartanMedal2025;
    }

    return SpartanMedal;
  }, [year, type]);

  return <MedalComponent {...props} />;
};

export default SpartanMedalSelector;
