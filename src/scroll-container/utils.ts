/* eslint-disable no-param-reassign */

import { MakeObjectTypeOptional } from '../type-helpers';
import { WithScrollState } from './with-scroll';

export type OptionalWithScrollState = MakeObjectTypeOptional<WithScrollState>;

const cleanRestScrollProps = (obj: OptionalWithScrollState) => {
  delete obj.fullyInView;
  delete obj.hasBeenFullyInView;
  delete obj.hasBeenInView;
  delete obj.hasBeenJustInView;
  delete obj.hasBeenMostlyInView;
  delete obj.hasBeenOutOfView;
  delete obj.inView;
  delete obj.justInView;
  delete obj.mostlyInView;
  delete obj.outOfView;
  delete obj.scrollPosition;
  delete obj.scrollPositionVh;
  return obj;
};

export default cleanRestScrollProps;
export { cleanRestScrollProps };
