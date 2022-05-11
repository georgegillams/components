// @import '../Tokens/common';
import styled, { css } from 'styled-components';
import { primaryColor, primaryColorDarkMode } from '../constants/colors';

// .progress {
//   &__outer {
//     width: 100%;
//     height: 0.5rem;
//     border-radius: 5rem;
//     background-color: lightgray;

//     @media (prefers-color-scheme: dark) {
//       background-color: #3c4043;
//     }
//   }

//   &__inner {
// }

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
})`
  height: 100%;
  transition: width 0.4s ease-in-out;
  border-radius: 5rem;
  background-color: ${primaryColor};
  //       background-color: var(--primary-color-dark, $primary-color-dark);

  @media (prefers-color-scheme: dark) {
    background-color: ${primaryColorDarkMode};
    //       background-color: var(--primary-color-dark, $primary-color-dark);
  }

  //     &--error {
  //       background-color: $destructive-color;

  //       @media (prefers-color-scheme: dark) {
  //         background-color: $destructive-color-dark;
  //       }
  //     }
  //   }
`;
