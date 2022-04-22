import styled, { css } from 'styled-components';
// @import '../Tokens/common';

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 0.2rem;
  background: ${backgroundColor};
  box-shadow: 0 0 0 1px #cdcdd7 inset;
  cursor: pointer;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -moz-appearance: none;
  appearance: none;

  ${focusStyle(true)}

  @media (prefers-color-scheme: dark) {
    background: $background-color-invert;
  }

  //     &--disabled {
  //       background-color: $disabled-background-color;
  //       cursor: inherit;

  //       @media (prefers-color-scheme: dark) {
  //         background-color: $disabled-background-color-invert;
  //       }
  //     }
  //     &--valid {
  //       box-shadow: 0 0 0 1px $bpk-color-monteverde inset;
  //     }
  //     &--invalid {
  //       box-shadow: 0 0 0 1px $bpk-color-panjin inset;
  //     }
`;

//   &__check {
//     position: absolute;
//     top: 0.12rem;
//     left: 0.15rem;
//     display: none;
//     color: $checkbox-tick-color;
//     color: var(--checkbox-tick-color, $checkbox-tick-color);
//     fill: $checkbox-tick-color;
//     fill: var(--checkbox-tick-color, $checkbox-tick-color);
//     pointer-events: none;

//     @media (prefers-color-scheme: dark) {
//       color: $primary-color-invert;
//       color: var(--checkbox-tick-color-invert, $primary-color-invert);
//       fill: $primary-color-invert;
//       fill: var(--checkbox-tick-color-invert, $primary-color-invert);
//     }

//     &--checked {
//       display: inherit;
//     }

//     &--valid {
//       color: $bpk-color-monteverde;
//       fill: $bpk-color-monteverde;
//     }
//     &--invalid {
//       color: $bpk-color-panjin;
//       fill: $bpk-color-panjin;
//     }
//     &--disabled {
//       color: $disabled-color;
//       fill: $disabled-color;

//       @media (prefers-color-scheme: dark) {
//         color: $disabled-color-invert;
//         fill: $disabled-color-invert;
//       }
//     }
//   }

//   &__label {
//     margin-left: 0.5rem;
//     color: $not-black;
//     font-size: 1.2rem;

//     @media (prefers-color-scheme: dark) {
//       color: $not-black-invert;
//     }

//     &--disabled {
//       color: $disabled-background-color;
//     }
//   }
// }
