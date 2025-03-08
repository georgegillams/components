import { css } from 'styled-components';
import {
  ctaColor,
  ctaColorDarkMode,
  ctaColorHover,
  ctaColorActive,
  ctaColorHoverDarkMode,
  ctaColorActiveDarkMode,
  destructiveColor,
  destructiveColorDarkMode,
  destructiveColorHover,
  destructiveColorActive,
  destructiveColorHoverDarkMode,
  destructiveColorActiveDarkMode,
  disabledBackgroundColor,
  disabledBackgroundColorDarkMode,
  disabledColor,
  disabledColorDarkMode,
  notBlack,
  backgroundColorElevatedColored,
  shadowColor,
  backgroundColor,
  alternatingBackgroundColor1,
  alternatingBackgroundColor2,
  backgroundColorDarkMode,
  alternatingBackgroundColor1DarkMode,
  alternatingBackgroundColor2DarkMode,
  shadowColorDarkMode,
  alternatingBackgroundColor3,
  alternatingBackgroundColor3DarkMode,
  alternatingBackgroundColor4DarkMode,
  alternatingBackgroundColor4,
} from '../constants/colors';
import { BUTTON_TYPES } from './constants';
import { capitalise } from '../helpers/helper-functions';

type ColorSet = {
  background: string;
  backgroundHover: string;
  backgroundActive: string;
  foreground: string;
  foregroundHover: string;
  foregroundActive: string;
  outline?: string;
};

const buttonColors: Record<
  string,
  {
    lm: ColorSet;
    dm: ColorSet;
  }
> = {
  [BUTTON_TYPES.primary]: {
    lm: {
      background: ctaColor,
      backgroundHover: ctaColorHover,
      backgroundActive: ctaColorActive,
      foreground: 'white',
      foregroundHover: 'white',
      foregroundActive: 'white',
    },
    dm: {
      background: ctaColorDarkMode,
      backgroundHover: ctaColorHoverDarkMode,
      backgroundActive: ctaColorActiveDarkMode,
      foreground: 'white',
      foregroundHover: 'white',
      foregroundActive: 'white',
    },
  },
  [BUTTON_TYPES.secondary]: {
    lm: {
      background: backgroundColor,
      backgroundHover: alternatingBackgroundColor2,
      backgroundActive: alternatingBackgroundColor4,
      foreground: notBlack,
      foregroundHover: notBlack,
      foregroundActive: notBlack,
      outline: shadowColor,
    },
    dm: {
      background: backgroundColorDarkMode,
      backgroundHover: alternatingBackgroundColor2DarkMode,
      backgroundActive: alternatingBackgroundColor4DarkMode,
      foreground: 'white',
      foregroundHover: 'white',
      foregroundActive: 'white',
      outline: alternatingBackgroundColor4DarkMode,
    },
  },
  [BUTTON_TYPES.bouncy]: {
    lm: {
      background: 'transparent',
      backgroundHover: ctaColorHover,
      backgroundActive: ctaColorActive,
      foreground: notBlack,
      foregroundHover: 'white',
      foregroundActive: 'white',
    },
    dm: {
      background: 'transparent',
      backgroundHover: ctaColorHoverDarkMode,
      backgroundActive: ctaColorActiveDarkMode,
      foreground: 'white',
      foregroundHover: 'white',
      foregroundActive: 'white',
    },
  },
  [BUTTON_TYPES.destructive]: {
    lm: {
      background: destructiveColor,
      backgroundHover: destructiveColorHover,
      backgroundActive: destructiveColorActive,
      foreground: 'white',
      foregroundHover: 'white',
      foregroundActive: 'white',
    },
    dm: {
      background: destructiveColorDarkMode,
      backgroundHover: destructiveColorHoverDarkMode,
      backgroundActive: destructiveColorActiveDarkMode,
      foreground: 'white',
      foregroundHover: 'white',
      foregroundActive: 'white',
    },
  },
  ['disabled']: {
    lm: {
      background: destructiveColor,
      backgroundHover: destructiveColorHover,
      backgroundActive: destructiveColorActive,
      foreground: 'white',
      foregroundHover: 'white',
      foregroundActive: 'white',
    },
    dm: {
      background: destructiveColorDarkMode,
      backgroundHover: destructiveColorHoverDarkMode,
      backgroundActive: destructiveColorActiveDarkMode,
      foreground: 'white',
      foregroundHover: 'white',
      foregroundActive: 'white',
    },
  },
};

export const createStylesForButtonType = (
  buttonType: BUTTON_TYPES,
  theme: any,
) => {
  return css`
    background-color: ${(theme &&
      theme[`button${capitalise(buttonType)}BackgroundColor`]) ||
    buttonColors[buttonType].lm.background};
    color: ${(theme &&
      theme[`button${capitalise(buttonType)}ForegroundColor`]) ||
    buttonColors[buttonType].lm.foreground};
    box-shadow: ${buttonColors[buttonType].lm.outline
      ? `0px 0px 0px 1px ${buttonColors[buttonType].lm.outline} inset`
      : 'none'};

    @media (prefers-color-scheme: dark) {
      background-color: ${(theme &&
        theme[`button${capitalise(buttonType)}BackgroundColorDarkMode`]) ||
      buttonColors[buttonType].dm.background};
      color: ${(theme &&
        theme[`button${capitalise(buttonType)}ForegroundColorDarkMode`]) ||
      buttonColors[buttonType].dm.foreground};
      box-shadow: ${buttonColors[buttonType].dm.outline
        ? `0px 0px 0px 1px ${buttonColors[buttonType].dm.outline} inset`
        : 'none'};
    }

    &:focus,
    &:hover {
      background-color: ${(theme &&
        theme[`button${capitalise(buttonType)}BackgroundColorHover`]) ||
      buttonColors[buttonType].lm.backgroundHover};
      color: ${(theme &&
        theme[`button${capitalise(buttonType)}ForegroundColorHover`]) ||
      buttonColors[buttonType].lm.foregroundHover};

      @media (prefers-color-scheme: dark) {
        background-color: ${(theme &&
          theme[
            `button${capitalise(buttonType)}BackgroundColorHoverDarkMode`
          ]) ||
        buttonColors[buttonType].dm.backgroundHover};
        color: ${(theme &&
          theme[
            `button${capitalise(buttonType)}ForegroundColorHoverDarkMode`
          ]) ||
        buttonColors[buttonType].dm.foregroundHover};
      }
    }

    &:active {
      background-color: ${(theme &&
        theme[`button${capitalise(buttonType)}BackgroundColorActive`]) ||
      buttonColors[buttonType].lm.backgroundActive};
      color: ${(theme &&
        theme[`button${capitalise(buttonType)}ForegroundColorActive`]) ||
      buttonColors[buttonType].lm.foregroundActive};

      @media (prefers-color-scheme: dark) {
        background-color: ${(theme &&
          theme[
            `button${capitalise(buttonType)}BackgroundColorActiveDarkMode`
          ]) ||
        buttonColors[buttonType].dm.backgroundActive};
        color: ${(theme &&
          theme[
            `button${capitalise(buttonType)}ForegroundColorActiveDarkMode`
          ]) ||
        buttonColors[buttonType].dm.foregroundActive};
      }
    }

    &:disabled {
      background-color: ${disabledBackgroundColor};
      color: ${disabledColor};

      @media (prefers-color-scheme: dark) {
        background-color: ${disabledBackgroundColorDarkMode};
        color: ${disabledColorDarkMode};
      }
    }
  `;
};
