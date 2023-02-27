import React from 'react';
import { EVENT_TYPE } from '../spartan-medal';
import SpartanTrifectaDisplay from './index';

export default {
  title: 'Molecules/Spartan trifecta display',
  component: SpartanTrifectaDisplay,
};

export const FirstWedge = () => (
  <SpartanTrifectaDisplay
    wedges={[EVENT_TYPE.sprint, null, null]}
    year="2022"
  />
);

export const SecondWedge = () => (
  <SpartanTrifectaDisplay wedges={[null, EVENT_TYPE.super, null]} year="2022" />
);

export const SpecialistWorkshop = () => (
  <SpartanTrifectaDisplay
    wedges={[EVENT_TYPE.obstacleSpecialistWorkshop, null, null]}
  />
);

export const AllWedges = () => (
  <SpartanTrifectaDisplay
    wedges={[EVENT_TYPE.sprint, EVENT_TYPE.super, EVENT_TYPE.beast]}
    year="2022"
  />
);
