import React from 'react';
import ToughMudderPatch, { PATCH_TYPE } from './index';

export default {
  title: 'Styled/Molecules/Tough mudder patch',
  component: ToughMudderPatch,
};

export const Half = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.eventHalf}
    year="1941"
    stravaLink="https://strava.com"
  />
);
export const NoStrava = () => (
  <ToughMudderPatch type={PATCH_TYPE.eventFull} year="1941" />
);
export const Full = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.eventFull}
    year="1941"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire2 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire2}
    year="1941"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire3 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire3}
    year="1941"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire456 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire456}
    year="1941"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire789 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire789}
    year="1941"
    stravaLink="https://strava.com"
  />
);
export const Legionnaire10 = () => (
  <ToughMudderPatch
    type={PATCH_TYPE.legionnaire10}
    year="1941"
    stravaLink="https://strava.com"
  />
);
