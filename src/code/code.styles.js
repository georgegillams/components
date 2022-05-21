import styled, { css } from 'styled-components';

import {
  bpkColorSkyGrayTint07,
  notBlack,
  notBlackDarkMode,
  primaryColorDarkMode,
} from '../constants/colors';

const codeStyle = css`
  position: relative;
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-color: ${notBlack};
  color: ${bpkColorSkyGrayTint07};
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: black;
  }
`;

const codeStyleLight = css`
  padding: 0.1rem 0.3rem;
  border-radius: 0.2rem;
  background-color: rgba(173, 174, 178, 0.2);
  color: ${notBlack};
  font-size: inherit;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(175, 176, 182, 0.4);
    color: ${notBlackDarkMode};
  }
`;

// .code {
//   &__text-link {
//     color: $link-color;
//     fill: $link-color;

//     @media (prefers-color-scheme: dark) {
//       color: $link-color-invert;
//       fill: $link-color-invert;
//     }
//   }

//   &__inner-container {
//     position: absolute;
//     top: 0.5rem;
//     left: 0.5rem;
//     // width: 500rem;
//     color: $bpk-color-sky-gray-tint-07;
//     font-family: 'Space Mono', monospace;
//     font-size: 0.7rem;
//     overflow: scroll;
//     // box-shadow: 1rem 1rem 1rem #f3f2f5;

//     &--light {
//       padding: 0.1rem 0.3rem;
//       border-radius: 0.2rem;
//       background-color: $bpk-color-sky-gray-tint-07;
//       color: $not-black;
//     }
//   }

//   &__lang {
//     position: absolute;
//     top: 0;
//     right: 0;
//     padding: 0.25rem 0.4rem 0.1rem;
//     border-radius: 0.2rem;
//     background-color: rgba(243, 242, 245, 0.25);
//     color: #f3f2f5;
//     font-family: 'Space Mono', monospace;
//     font-size: 0.7rem;
//     font-style: italic;
//   }

// }

export const StyledCodeBashArrow = styled.span`
  color: ${primaryColorDarkMode};
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
`;

export const StyledCodeInline = styled.span`
  ${codeStyle}
  ${codeStyleLight}

  ${({ inheritColor }) =>
    inheritColor &&
    css`
      color: inherit;

      @media (prefers-color-scheme: dark) {
        color: inherit;
      }
    `}
`;
