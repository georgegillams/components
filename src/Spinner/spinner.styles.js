import styled, { css } from 'styled-components';
import { notBlack } from '../constants/colors';
// @use 'sass:math';

// @import '../Tokens/common';

export const spinTime = 0.8;
export const bladeCount = 8;

// @keyframes spinner-fade {
//   0% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0.4;
//   }
// }

// .spinner {
//   &__outer {
//     position: relative;
//     display: inline-block;
//     width: 1.125rem;
//     height: 1.125rem;
//     color: $not-black;

//     @media (prefers-color-scheme: dark) {
//       color: $not-black-invert;
//     }

//     &--light {
//       color: $not-black-invert;

//       @media (prefers-color-scheme: dark) {
//         color: $not-black;
//       }
//     }

//     &--large {
//       width: 2.375rem;
//       height: 2.375rem;
//     }
//   }

//   &__inner {
//     position: absolute;
//     bottom: 0.05rem;
//     left: 0.5rem;
//     width: 0.13rem;
//     height: 0.3rem;
//     border-radius: 1rem;
//     background-color: transparent;
//     background-color: currentColor;
//     animation: spinner-fade #{$spin-time}s infinite linear;
//     transform-origin: center -0.16rem;

//     $animation-delay: -1.5 * $spin-time;
//     $blade-rotation: 0deg;

//     @for $i from 1 through 12 {
//       &:nth-child(#{$i}) {
//         transform: rotate($blade-rotation);
//         animation-delay: #{$animation-delay}s;
//         $blade-rotation: math.div($blade-rotation + 360, $blade-count);
//         $animation-delay: math.div($animation-delay + $spin-time, $blade-count);
//       }
//     }

//     &--large {
//       bottom: 0.1rem;
//       left: 1.05rem;
//       width: 0.25rem;
//       height: 0.8rem;
//       transform-origin: center -0.34em;
//     }
//   }
// }

export const Outer = styled.div`
  @keyframes spinner-fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }

  position: relative;
  display: inline-block;
  width: 1.125rem;
  height: 1.125rem;
  color: ${notBlack};

  //     @media (prefers-color-scheme: dark) {
  //       color: $not-black-invert;
  //     }

  //     &--light {
  //       color: $not-black-invert;

  //       @media (prefers-color-scheme: dark) {
  //         color: $not-black;
  //       }
  //     }

  //     &--large {
  //       width: 2.375rem;
  //       height: 2.375rem;
  //     }
`;

export const Spoke = styled.div`
  position: absolute;
  bottom: 0.05rem;
  left: 0.5rem;
  width: 0.13rem;
  height: 0.3rem;
  border-radius: 1rem;
  background-color: transparent;
  background-color: currentColor;
  animation: spinner-fade ${spinTime}s infinite linear;
  transform-origin: center -0.16rem;

  ${({ index }) => {
    const animationDelay = (-1.5 * spinTime + index * spinTime) / bladeCount;
    const bladeRotation = (index * 360) / bladeCount;
    return css`
      transform: rotate(${bladeRotation}deg);
      animation-delay: ${animationDelay}s;
    `;
  }}//     &--large {
  //       bottom: 0.1rem;
  //       left: 1.05rem;
  //       width: 0.25rem;
  //       height: 0.8rem;
  //       transform-origin: center -0.34em;
  //     }
  //   }
`;
