import React from 'react';
import ToughMudderPatch, { PATCH_TYPE } from './index';

export default {
  title: 'Molecules/Tough mudder patch',
  component: ToughMudderPatch,
};

export const Half = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.eventHalf}
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const NoStrava = () => (
  <ToughMudderPatch type={PATCH_TYPE.eventFull} year="2022" />
);
export const Full = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.eventFull}
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire2 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire2}
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire3 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire3}
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire456 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire456}
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire789 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire789}
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire10 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire10}
    year="2022"
    stravaLink="https://strava.com"
  />
);
