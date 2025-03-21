import { capitalise } from '../helpers/helper-functions';

export enum BUTTON_TYPES {
  primary = 'primary',
  secondary = 'secondary',
  bouncy = 'bouncy',
  destructive = 'destructive',
}

export enum BUTTON_SIZES {
  regular = 'regular',
  large = 'large',
}

export const buttonThemeProperties = Object.keys(BUTTON_TYPES).reduce(
  (prev, next) => [
    ...prev,
    `button${capitalise(next)}BackgroundColor`,
    `button${capitalise(next)}BackgroundColorDarkMode`,
    `button${capitalise(next)}ForegroundColor`,
    `button${capitalise(next)}ForegroundColorDarkMode`,
    `button${capitalise(next)}ForegroundColorHover`,
    `button${capitalise(next)}ForegroundColorHoverDarkMode`,
  ],
  [] as string[],
);
