import { css } from 'styled-components';
import { outlineColor, outlineColorDarkMode } from './colors';
import { outlineGap, outlineBorderRadius, outlineWidth } from './layout';

export const focusStyle = (
  applyRelativePositioning = false,
  useWithin = false,
) => css`
  ${useWithin ? '&:focus-within,' : undefined}
  &:focus-visible {
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
      ${({ theme }) => css`
        border: solid ${theme.focusOutlineColor ?? outlineColor} ${outlineWidth};
      `}
      border-radius: ${outlineBorderRadius};
      pointer-events: none;

      @media (prefers-color-scheme: dark) {
        ${({ theme }) => css`
          border-color: ${theme.focusOutlineColorDarkMode ??
          outlineColorDarkMode};
        `}
      }
    }
  }
`;
