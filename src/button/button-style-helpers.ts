import { css } from 'styled-components';
import {
  buttonPrimaryBackground,
  buttonPrimaryBackgroundHover,
  buttonPrimaryBackgroundActive,
  buttonPrimaryForeground,
  buttonPrimaryForegroundHover,
  buttonPrimaryForegroundActive,
  buttonPrimaryBackgroundDarkMode,
  buttonPrimaryBackgroundHoverDarkMode,
  buttonPrimaryBackgroundActiveDarkMode,
  buttonPrimaryForegroundDarkMode,
  buttonPrimaryForegroundHoverDarkMode,
  buttonPrimaryForegroundActiveDarkMode,
  buttonSecondaryBackground,
  buttonSecondaryBackgroundHover,
  buttonSecondaryBackgroundActive,
  buttonSecondaryForeground,
  buttonSecondaryForegroundHover,
  buttonSecondaryForegroundActive,
  buttonSecondaryOutline,
  buttonSecondaryOutlineHover,
  buttonSecondaryBackgroundDarkMode,
  buttonSecondaryBackgroundHoverDarkMode,
  buttonSecondaryBackgroundActiveDarkMode,
  buttonSecondaryForegroundDarkMode,
  buttonSecondaryForegroundHoverDarkMode,
  buttonSecondaryForegroundActiveDarkMode,
  buttonSecondaryOutlineDarkMode,
  buttonSecondaryOutlineHoverDarkMode,
  buttonBouncyBackground,
  buttonBouncyBackgroundHover,
  buttonBouncyBackgroundActive,
  buttonBouncyForeground,
  buttonBouncyForegroundHover,
  buttonBouncyForegroundActive,
  buttonBouncyBackgroundDarkMode,
  buttonBouncyBackgroundHoverDarkMode,
  buttonBouncyBackgroundActiveDarkMode,
  buttonBouncyForegroundDarkMode,
  buttonBouncyForegroundHoverDarkMode,
  buttonBouncyForegroundActiveDarkMode,
  buttonBouncyOutlineHoverDarkMode,
  buttonDestructiveBackground,
  buttonDestructiveBackgroundHover,
  buttonDestructiveBackgroundActive,
  buttonDestructiveForeground,
  buttonDestructiveForegroundHover,
  buttonDestructiveForegroundActive,
  buttonDestructiveBackgroundDarkMode,
  buttonDestructiveBackgroundHoverDarkMode,
  buttonDestructiveBackgroundActiveDarkMode,
  buttonDestructiveForegroundDarkMode,
  buttonDestructiveForegroundHoverDarkMode,
  buttonDestructiveForegroundActiveDarkMode,
  buttonDisabledBackground,
  buttonDisabledForeground,
  buttonDisabledBackgroundDarkMode,
  buttonDisabledForegroundDarkMode,
} from '../constants/semantic/colors';
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
  outlineHover?: string;
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
      background: buttonPrimaryBackground,
      backgroundHover: buttonPrimaryBackgroundHover,
      backgroundActive: buttonPrimaryBackgroundActive,
      foreground: buttonPrimaryForeground,
      foregroundHover: buttonPrimaryForegroundHover,
      foregroundActive: buttonPrimaryForegroundActive,
    },
    dm: {
      background: buttonPrimaryBackgroundDarkMode,
      backgroundHover: buttonPrimaryBackgroundHoverDarkMode,
      backgroundActive: buttonPrimaryBackgroundActiveDarkMode,
      foreground: buttonPrimaryForegroundDarkMode,
      foregroundHover: buttonPrimaryForegroundHoverDarkMode,
      foregroundActive: buttonPrimaryForegroundActiveDarkMode,
    },
  },
  [BUTTON_TYPES.secondary]: {
    lm: {
      background: buttonSecondaryBackground,
      backgroundHover: buttonSecondaryBackgroundHover,
      backgroundActive: buttonSecondaryBackgroundActive,
      foreground: buttonSecondaryForeground,
      foregroundHover: buttonSecondaryForegroundHover,
      foregroundActive: buttonSecondaryForegroundActive,
      outline: buttonSecondaryOutline,
      outlineHover: buttonSecondaryOutlineHover,
    },
    dm: {
      background: buttonSecondaryBackgroundDarkMode,
      backgroundHover: buttonSecondaryBackgroundHoverDarkMode,
      backgroundActive: buttonSecondaryBackgroundActiveDarkMode,
      foreground: buttonSecondaryForegroundDarkMode,
      foregroundHover: buttonSecondaryForegroundHoverDarkMode,
      foregroundActive: buttonSecondaryForegroundActiveDarkMode,
      outline: buttonSecondaryOutlineDarkMode,
      outlineHover: buttonSecondaryOutlineHoverDarkMode,
    },
  },
  [BUTTON_TYPES.bouncy]: {
    lm: {
      background: buttonBouncyBackground,
      backgroundHover: buttonBouncyBackgroundHover,
      backgroundActive: buttonBouncyBackgroundActive,
      foreground: buttonBouncyForeground,
      foregroundHover: buttonBouncyForegroundHover,
      foregroundActive: buttonBouncyForegroundActive,
    },
    dm: {
      background: buttonBouncyBackgroundDarkMode,
      backgroundHover: buttonBouncyBackgroundHoverDarkMode,
      backgroundActive: buttonBouncyBackgroundActiveDarkMode,
      foreground: buttonBouncyForegroundDarkMode,
      foregroundHover: buttonBouncyForegroundHoverDarkMode,
      foregroundActive: buttonBouncyForegroundActiveDarkMode,
      outlineHover: buttonBouncyOutlineHoverDarkMode,
    },
  },
  [BUTTON_TYPES.destructive]: {
    lm: {
      background: buttonDestructiveBackground,
      backgroundHover: buttonDestructiveBackgroundHover,
      backgroundActive: buttonDestructiveBackgroundActive,
      foreground: buttonDestructiveForeground,
      foregroundHover: buttonDestructiveForegroundHover,
      foregroundActive: buttonDestructiveForegroundActive,
    },
    dm: {
      background: buttonDestructiveBackgroundDarkMode,
      backgroundHover: buttonDestructiveBackgroundHoverDarkMode,
      backgroundActive: buttonDestructiveBackgroundActiveDarkMode,
      foreground: buttonDestructiveForegroundDarkMode,
      foregroundHover: buttonDestructiveForegroundHoverDarkMode,
      foregroundActive: buttonDestructiveForegroundActiveDarkMode,
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
      box-shadow: ${buttonColors[buttonType].lm.outlineHover
        ? `0px 0px 0px 1px ${buttonColors[buttonType].lm.outlineHover} inset`
        : 'none'};

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
        box-shadow: ${buttonColors[buttonType].dm.outlineHover
          ? `0px 0px 0px 1px ${buttonColors[buttonType].dm.outlineHover} inset`
          : 'none'};
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
      background-color: ${buttonDisabledBackground};
      color: ${buttonDisabledForeground};

      @media (prefers-color-scheme: dark) {
        background-color: ${buttonDisabledBackgroundDarkMode};
        color: ${buttonDisabledForegroundDarkMode};
      }
    }
  `;
};
