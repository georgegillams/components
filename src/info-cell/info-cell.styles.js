// @import '../Tokens/common';

// $card-height: 14rem;
// $card-height-mobile: 10rem;
import styled, { css } from 'styled-components';
import {
  alternatingBackgroundColor1,
  alternatingBackgroundColor1DarkMode,
  alternatingBackgroundColor2,
  alternatingBackgroundColor2DarkMode,
  notBlack,
} from '../constants/colors';
import { breakpointSm } from '../constants/layout';
import Text from '../text';
import { INFO_CELL_STYLES } from './constants';

// .info-cell {
//   &__outer {
export const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${alternatingBackgroundColor1};
  color: ${notBlack};

  @media (prefers-color-scheme: dark) {
    background-color: ${alternatingBackgroundColor1DarkMode};
    color: white;
  }

  ${({ cellStyle }) => {
    switch (cellStyle) {
      case INFO_CELL_STYLES.dark:
        return css`
          background-color: ${alternatingBackgroundColor2};
          @media (prefers-color-scheme: dark) {
            background-color: ${alternatingBackgroundColor2DarkMode};
          }
        `;
      default:
        return null;
    }
  }}
`;

//     &--dark {

//       @media (prefers-color-scheme: dark) {
//         background-color: $alternating-background-color-2-invert;
//         color: white;
//       }
//     }
//   }

export const InnerWrapper = styled.div`
  //   &__inner {
  display: flex;
  width: 100%;
  max-width: 70rem;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpointSm}) {
    flex-direction: row;
  }
`;

//     @include bpk-breakpoint-mobile {
//     }
//   }

export const Title = styled(Text)``;
//   &__title {
//     margin: 0;
//     font-size: $section-font-size;
//     font-weight: inherit;

//     &--with-content {
//       margin-bottom: $spacing-base;
//     }
//   }

//   &__text-container {
//     display: flex;
//     min-width: 14rem;
//     min-height: 8rem;
//     padding: $spacing-base;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }

//   &__aux-outer {
//     height: $card-height;
//     overflow: hidden;

//     @include bpk-breakpoint-mobile {
//       height: $card-height-mobile;
//     }
//   }

//   &__aux-inner {
//     padding-top: 0;
//     opacity: 1;

//     @include bpk-breakpoint-mobile {
//       height: $card-height-mobile;
//     }

//     &--animated {
//       transition: all 1s ease-in-out;
//     }

//     &--hidden {
//       padding-top: $card-height;
//       opacity: 0;
//     }
//   }

//   &__aux {
//     display: flex;
//     height: $card-height;
//     flex-direction: column;
//     justify-content: end;

//     @include bpk-breakpoint-mobile {
//       height: $card-height-mobile;
//     }
//   }
// }
