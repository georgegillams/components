import { css } from 'styled-components';
import { outlineColor, outlineColorDarkMode } from './colors';
import { outlineGap, outlineBorderRadius, outlineWidth } from './layout';

export const focusStyle = (applyRelativePositioning = false) => css`
  &:focus-within,
  &:focus {
    ${applyRelativePositioning &&
    css`
      position: relative;
    `}

    /* stylelint-disable-next-line declaration-no-important */
    outline: none !important;

    &::after {
      position: absolute;
      /* Could just use "inset" but it's not widely supported */
      top: -${outlineGap};
      right: -${outlineGap};
      bottom: -${outlineGap};
      left: -${outlineGap};
      content: '';
      display: block;
      border: solid ${outlineColor} ${outlineWidth};
      border-radius: ${outlineBorderRadius};
      pointer-events: none;

      @media (prefers-color-scheme: dark) {
        border-color: ${outlineColorDarkMode};
      }
    }
  }
`;
