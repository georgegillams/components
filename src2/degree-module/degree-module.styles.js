import styled, { css } from 'styled-components';
import {
  notBlack,
  notBlackDarkMode,
  primaryColor,
  primaryColorDarkMode,
} from '../constants/colors';
import Progress from '../progress';

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const ModuleName = styled.span`
  width: 9rem;
  margin-right: $spacing-base;
`;

export const BarWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const Marker = styled.div`
  position: absolute;
  top: -0.2rem;
  width: 0.2rem;
  height: 0.5rem;
  margin-left: calc(70% - 0.175rem);
  background-color: ${notBlack};
  opacity: 0.5;

  @media (prefers-color-scheme: dark) {
    background-color: ${notBlackDarkMode};
    opacity: 0.8;
  }
`;

export const ProgressBar = styled(Progress)`
  position: absolute;
  width: 100%;
  top: -0.2rem;
`;

//   &--first-marker {
//   }

//   &--21-marker {
//     position: absolute;
//     top: -0.2rem;
//     width: 0.2rem;
//     height: 0.5rem;
//     margin-left: calc(70% - 0.175rem);
//     background-color: $not-black;
//     opacity: 0.5;

//     @media (prefers-color-scheme: dark) {
//       background-color: $not-black-invert;
//       opacity: 0.8;
//     }
//   }

export const Percentage = styled.span`
     width: 2.1rem;
     margin-left: 0.6rem;
     transition: all 0.4s;
       color: ${primaryColorDarkMode};
     font-weight: bold;
     opacity: 0;

     @media (prefers-color-scheme: dark) {
       color: ${primaryColor};
     }

     ${({ showFilled }) =>
       showFilled &&
       css`
         opacity: 1;
       `}
   }
   `;
// }
