import { css } from 'styled-components';
import { outlineColor, outlineColorDarkMode } from './semantic/colors';
import {
  outlineGap,
  outlineBorderRadius,
  outlineWidth,
  pageMaxWidth,
} from './semantic/layout';
import { breakpointMd } from './primitive/layout';

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

export const pageContainer = css`
  width: 100%;
  max-width: ${pageMaxWidth};
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;

  @media (min-width: ${breakpointMd}) {
    padding-right: 1.875rem;
    padding-left: 1.875rem;
  }
`;
