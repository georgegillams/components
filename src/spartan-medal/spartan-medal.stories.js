import React from 'react';

import SpartanMedal, { EVENT_TYPE } from './index';

export default {
  title: 'Styled/Molecules/Spartan medal',
  component: SpartanMedal,
};

export const Sprint = () => (
  <SpartanMedal
    type={EVENT_TYPE.sprint}
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const NoStrava = () => (
  <SpartanMedal type={EVENT_TYPE.sprint} year="2022" />
);
export const Super = () => (
  <SpartanMedal
    type={EVENT_TYPE.super}
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const Beast = () => (
  <SpartanMedal
    type={EVENT_TYPE.beast}
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const Ultra = () => (
  <SpartanMedal
    type={EVENT_TYPE.ultra}
    year="2022"
    stravaLink="https://strava.com"
  />
);
