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
} from '../constants/colors';
import { BUTTON_TYPES } from './constants';

const buttonColors = {
  [BUTTON_TYPES.primary]: {
    lm: {
      background: ctaColor,
      backgroundHover: ctaColorHover,
      backgroundActive: ctaColorActive,
      foreground: 'white',
    },
    dm: {
      background: ctaColorDarkMode,
      backgroundHover: ctaColorHoverDarkMode,
      backgroundActive: ctaColorActiveDarkMode,
      foreground: 'white',
    },
  },
  [BUTTON_TYPES.bouncy]: {
    lm: {
      background: 'transparent',
      backgroundHover: ctaColorHover,
      backgroundActive: ctaColorActive,
      foreground: notBlack,
    },
    dm: {
      background: 'transparent',
      backgroundHover: ctaColorHoverDarkMode,
      backgroundActive: ctaColorActiveDarkMode,
      foreground: 'white',
    },
  },
  [BUTTON_TYPES.destructive]: {
    lm: {
      background: destructiveColor,
      backgroundHover: destructiveColorHover,
      backgroundActive: destructiveColorActive,
      foreground: 'white',
    },
    dm: {
      background: destructiveColorDarkMode,
      backgroundHover: destructiveColorHoverDarkMode,
      backgroundActive: destructiveColorActiveDarkMode,
      foreground: 'white',
    },
  },
  ['disabled']: {
    lm: {
      background: destructiveColor,
      backgroundHover: destructiveColorHover,
      backgroundActive: destructiveColorActive,
      foreground: 'white',
    },
    dm: {
      background: destructiveColorDarkMode,
      backgroundHover: destructiveColorHoverDarkMode,
      backgroundActive: destructiveColorActiveDarkMode,
      foreground: 'white',
    },
  },
};

export const createStylesForButtonType = (buttonType, theme) => {
  return css`
    background-color: ${(theme &&
      theme[`button${buttonType}BackgroundColor`]) ||
    buttonColors[buttonType].lm.background};
    color: ${(theme && theme[`button${buttonType}ForegroundColor`]) ||
    buttonColors[buttonType].lm.foreground};

    @media (prefers-color-scheme: dark) {
      background-color: ${(theme &&
        theme[`button${buttonType}BackgroundColorDarkMode`]) ||
      buttonColors[buttonType].dm.background};
      color: ${(theme && theme[`button${buttonType}ForegroundColorDarkMode`]) ||
      buttonColors[buttonType].dm.foreground};
    }

    &:focus,
    &:hover {
      background-color: ${(theme &&
        theme[`button${buttonType}BackgroundColorHover`]) ||
      buttonColors[buttonType].lm.backgroundHover};
      color: ${(theme && theme[`button${buttonType}ForegroundColorHover`]) ||
      buttonColors[buttonType].lm.foregroundHover};

      @media (prefers-color-scheme: dark) {
        background-color: ${(theme &&
          theme[`button${buttonType}BackgroundColorHoverDarkMode`]) ||
        buttonColors[buttonType].dm.backgroundHover};
        color: ${(theme &&
          theme[`button${buttonType}ForegroundColorHoverDarkMode`]) ||
        buttonColors[buttonType].dm.foregroundHover};
      }
    }

    &:active {
      background-color: ${(theme &&
        theme[`button${buttonType}BackgroundColorActive`]) ||
      buttonColors[buttonType].lm.backgroundActive};
      color: ${(theme && theme[`button${buttonType}ForegroundColorActive`]) ||
      buttonColors[buttonType].lm.foregroundActive};

      @media (prefers-color-scheme: dark) {
        background-color: ${(theme &&
          theme[`button${buttonType}BackgroundColorActiveDarkMode`]) ||
        buttonColors[buttonType].dm.backgroundActive};
        color: ${(theme &&
          theme[`button${buttonType}ForegroundColorActiveDarkMode`]) ||
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
