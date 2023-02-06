export enum TAG_TYPES {
  tech = 'tech',
  travel = 'travel',
  photography = 'photography',
  events = 'events',
  security = 'security',
}

export const TAG_TEXT_MAPPING: Record<TAG_TYPES, string> = {
  [TAG_TYPES.tech]: 'Tech',
  [TAG_TYPES.travel]: 'Travel',
  [TAG_TYPES.photography]: 'Photography',
  [TAG_TYPES.events]: 'Events',
  [TAG_TYPES.security]: 'Security',
};
