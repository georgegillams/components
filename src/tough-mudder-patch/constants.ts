import { notBlack } from '../constants/colors';

export const PATCH_TYPE = {
  eventHalf: 'eventHalf',
  eventFull: 'eventFull',
  legionnaire2: 'legionnaire2',
  legionnaire3: 'legionnaire3',
  legionnaire456: 'legionnaire456',
  legionnaire789: 'legionnaire789',
  legionnaire10: 'legionnaire10',
};

export const TYPE_DESCRIPTION = {
  [PATCH_TYPE.eventHalf]: 'HALF',
  [PATCH_TYPE.eventFull]: 'FULL',
  [PATCH_TYPE.legionnaire2]: '2X TOUGH MUDDER',
  [PATCH_TYPE.legionnaire3]: '3X TOUGH MUDDER',
  [PATCH_TYPE.legionnaire456]: '4-6X TOUGH MUDDER',
  [PATCH_TYPE.legionnaire789]: '7-9X TOUGH MUDDER',
  [PATCH_TYPE.legionnaire10]: '10X+ TOUGH MUDDER',
};

export const TYPE_COLORS = {
  [PATCH_TYPE.eventHalf]: {
    background: 'white',
    foreground: '#E66000',
  },
  [PATCH_TYPE.eventFull]: {
    background: 'rgb(255, 120, 26)',
    foreground: notBlack,
  },
  [PATCH_TYPE.legionnaire2]: { background: '#94e564', foreground: notBlack },
  [PATCH_TYPE.legionnaire3]: { background: '#11aadd', foreground: notBlack },
  [PATCH_TYPE.legionnaire456]: { background: '#f1fc58', foreground: notBlack },
  [PATCH_TYPE.legionnaire789]: { background: '#d863ed', foreground: notBlack },
  [PATCH_TYPE.legionnaire10]: {
    background: '#602c04',
    foreground: 'rgb(255, 120, 26)',
  },
};
