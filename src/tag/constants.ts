import { notBlack, notBlackDarkMode } from '../constants/colors';

export enum TAG_TYPES {
  events = 'events',
  ocr = 'ocr',
  photography = 'photography',
  security = 'security',
  tech = 'tech',
  travel = 'travel',
  work = 'work',
}

export const TAG_TEXT_MAPPING: Record<TAG_TYPES, string> = {
  [TAG_TYPES.events]: 'Events',
  [TAG_TYPES.ocr]: 'OCR',
  [TAG_TYPES.photography]: 'Photography',
  [TAG_TYPES.security]: 'Security',
  [TAG_TYPES.tech]: 'Tech',
  [TAG_TYPES.travel]: 'Travel',
  [TAG_TYPES.work]: 'Work',
};

export const TAG_COLOR_MAPPINGS: Record<
  TAG_TYPES,
  {
    background: string;
    foreground: string;
  }
> = {
  [TAG_TYPES.events]: { background: '#6a1b9a', foreground: notBlackDarkMode },
  [TAG_TYPES.ocr]: { background: '#6a1b9a', foreground: notBlackDarkMode },
  [TAG_TYPES.photography]: {
    background: '#d84315',
    foreground: notBlackDarkMode,
  },
  [TAG_TYPES.security]: { background: '#44aeff', foreground: notBlack },
  [TAG_TYPES.tech]: { background: '#fbc02d', foreground: notBlack },
  [TAG_TYPES.travel]: { background: '#01579b', foreground: notBlackDarkMode },
  [TAG_TYPES.work]: { background: '#f2a33b', foreground: notBlack },
};
