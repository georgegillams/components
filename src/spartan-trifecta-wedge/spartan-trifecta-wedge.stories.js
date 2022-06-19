import React from 'react';
import { EVENT_TYPE } from '../spartan-medal';

import SpartanTrifectaWedge from './index';

export default {
  title: 'Styled/Molecules/Spartan trifecta wedge',
  component: SpartanTrifectaWedge,
};

export const Sprint = () => (
  <SpartanTrifectaWedge type={EVENT_TYPE.sprint} year="1941" />
);
export const Super = () => (
  <SpartanTrifectaWedge type={EVENT_TYPE.super} year="1941" />
);
export const Beast = () => (
  <SpartanTrifectaWedge type={EVENT_TYPE.beast} year="1941" />
);
export const Ultra = () => (
  <SpartanTrifectaWedge type={EVENT_TYPE.ultra} year="1941" />
);
