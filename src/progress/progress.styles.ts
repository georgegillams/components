import styled, { css } from 'styled-components';
import { primaryColor } from '../constants/colors';

export const Outer = styled.div.attrs({ role: 'progressbar' })`
  width: 100%;
  height: 0.5rem;
  border-radius: 5rem;
  background-color: lightgray;

  @media (prefers-color-scheme: dark) {
    background-color: #3c4043;
  }
`;

export const Inner = styled.div.attrs({
  ariaHidden: true,
})<{
  progressPercentage: number;
}>`
  height: 100%;
  transition: width 0.4s ease-in-out;
  border-radius: 5rem;

  ${({ progressPercentage }) =>
    css`
      width: ${progressPercentage}%;
    `}

  ${({ theme }) =>
    css`
      background-color: ${theme?.progressBarColor || primaryColor};

      @media (prefers-color-scheme: dark) {
        background-color: ${theme?.progressBarColorDarkMode || primaryColor};
      }
    `}
`;
