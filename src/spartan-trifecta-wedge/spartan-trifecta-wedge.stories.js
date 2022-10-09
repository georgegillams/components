import React from 'react';
import { EVENT_TYPE } from '../spartan-medal';

import SpartanTrifectaWedge from './index';

export default {
  title: 'Styled/Molecules/Spartan trifecta wedge',
  component: SpartanTrifectaWedge,
};

export const Sprint = () => (
  <SpartanTrifectaWedge type={EVENT_TYPE.sprint} year="2022" />
);
export const Super = () => (
  <SpartanTrifectaWedge type={EVENT_TYPE.super} year="2022" />
);
export const Beast = () => (
  <SpartanTrifectaWedge type={EVENT_TYPE.beast} year="2022" />
);
export const Ultra = () => (
  <SpartanTrifectaWedge type={EVENT_TYPE.ultra} year="2022" />
);
export const SpecialistWorkshop = () => (
  <SpartanTrifectaWedge type={EVENT_TYPE.obstacleSpecialistWorkshop} />
);
