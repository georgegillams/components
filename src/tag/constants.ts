export enum TAG_TYPES {
  tech,
  travel,
  photography,
  events,
  security,
}

export const TAG_TEXT_MAPPING: Record<TAG_TYPES, string> = {
  [TAG_TYPES.tech]: 'Tech',
  [TAG_TYPES.travel]: 'Travel',
  [TAG_TYPES.photography]: 'Photography',
  [TAG_TYPES.events]: 'Events',
  [TAG_TYPES.security]: 'Security',
};
