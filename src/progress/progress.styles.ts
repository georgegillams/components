import styled, { css } from 'styled-components';
import {
  progressFill,
  progressFillDarkMode,
  progressTrackColor,
  progressTrackColorDarkMode,
} from '../constants/semantic/colors';
import { borderRadiusPill } from '../constants/primitive/layout';
import { durationSm } from '../constants/primitive/timings';

export const Outer = styled.div.attrs({ role: 'progressbar' })`
  width: 100%;
  height: 0.5rem;
  border-radius: ${borderRadiusPill};
  background-color: ${progressTrackColor};

  @media (prefers-color-scheme: dark) {
    background-color: ${progressTrackColorDarkMode};
  }
`;

export const Inner = styled.div.attrs({
  ariaHidden: true,
})<{
  progressPercentage: number;
}>`
  height: 100%;
  transition: width ${durationSm} ease-in-out;
  border-radius: ${borderRadiusPill};

  ${({ progressPercentage }) =>
    css`
      width: ${progressPercentage}%;
    `}

  ${({ theme }) =>
    css`
      background-color: ${theme?.progressBarColor || progressFill};

      @media (prefers-color-scheme: dark) {
        background-color: ${theme?.progressBarColorDarkMode ||
        progressFillDarkMode};
      }
    `}
`;
