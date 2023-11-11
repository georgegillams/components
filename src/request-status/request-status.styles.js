// @import '../Tokens/common';

// .request-status {
//   &__outer-container {
//   }

//   &__status {
//     z-index: $request-status-z-index;
//     margin-top: $spacing-base;
//     padding: 0 $spacing-base;
//     border: 0.1rem #1e1e1e solid;
//     border-radius: 0.2rem;
//     background-color: rgba(0, 0, 0, 0.1);

//     &--success {
//       border-color: green;
//       background-color: rgb(230, 255, 230);
//       color: green;
//     }

//     &--warn {
//     }

//     &--error {
//     }
//   }
// }

import styled, { css } from 'styled-components';
import { notBlack } from '../constants/colors';
import { requestStatusZIndex, spacingBase } from '../constants/layout';

export const Container = styled.div`
  position: fixed;
  left: 0;
  display: flex;
  z-index: ${requestStatusZIndex};
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    180deg,
    white,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
  pointer-events: none;

  ${({ showing }) => css`
    top: ${showing ? 0 : '-10rem'};
    opacity: ${showing ? 1 : 0};
  `}

  @media (prefers-color-scheme: dark) {
    background-image: linear-gradient(
      180deg,
      ${notBlack},
      rgba(30, 30, 30, 0),
      rgba(30, 30, 30, 0),
      rgba(30, 30, 30, 0)
    );
  }
`;

export const StatusItem = styled.span`
  z-index: ${requestStatusZIndex};
  margin-top: ${spacingBase};
  padding: 0 ${spacingBase};
  border: 0.1rem #1e1e1e solid;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.1);

  ${({ type }) => {
    switch (type) {
      case 'success':
        return css`
          border-color: green;
          background-color: rgb(230, 255, 230);
          color: green;
        `;
      case 'warn':
        return css`
          border-color: orange;
          background-color: rgb(255, 246, 230);
          color: orange;
        `;
      case 'error':
        return css`
          border-color: #e02626;
          background-color: rgb(252, 233, 233);
          color: #e02626;
        `;
      default:
        return null;
    }
  }}
`;
