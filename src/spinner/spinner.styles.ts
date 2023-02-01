import styled, { css, keyframes } from 'styled-components';
import { notBlack, notBlackDarkMode } from '../constants/colors';

export const spinTime = 0.8;
export const bladeCount = 8;

export interface SpinnerProps {
  light?: boolean;
  large?: boolean;
}

export interface SpokeProps extends SpinnerProps {
  index: number;
}

const spinnerFade = keyframes`
  0% {
    opacity: 1
    }
    100% {
      opacity: 0.1;
      }
      `;

export const Outer = styled.div<SpinnerProps>`
  position: relative;
  display: inline-block;
  width: 1.125rem;
  height: 1.125rem;
  color: ${notBlack};

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }

  ${({ light }) =>
    light &&
    css`
      color: ${notBlackDarkMode};

      @media (prefers-color-scheme: dark) {
        color: ${notBlack};
      }
    `}

  ${({ large }) =>
    large &&
    css`
      width: 2.375rem;
      height: 2.375rem;
    `}
`;

export const Spoke = styled.div<SpokeProps>`
  position: absolute;
  bottom: 0.05rem;
  left: 0.5rem;
  width: 0.13rem;
  height: 0.3rem;
  border-radius: 1rem;
  background-color: transparent;
  background-color: currentColor;
  animation: ${spinnerFade} ${spinTime}s infinite linear;
  transform-origin: center -0.16rem;

  ${({ index }) => {
    const animationDelay = (-1.5 * spinTime + index * spinTime) / bladeCount;
    const bladeRotation = (index * 360) / bladeCount;
    return css`
      transform: rotate(${bladeRotation}deg);
      animation-delay: ${animationDelay}s;
    `;
  }}

  ${({ large }) =>
    large &&
    css`
      bottom: 0.1rem;
      left: 1.05rem;
      width: 0.25rem;
      height: 0.8rem;
      transform-origin: center -0.34em;
    `}
`;
