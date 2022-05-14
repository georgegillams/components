export const auxHeight = '14rem';
export const auxHeightMobile = '10rem';

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

export const InnerWrapper = styled.div`
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

export const TextContainer = styled.div`
  display: flex;
  min-width: 14rem;
  min-height: 8rem;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpointSm}) {
  }
`;

export const Title = styled(Text)`
  ${({ withContent }) =>
    withContent &&
    css`
      padding-bottom: 1rem;
    `}
`;

export const AuxOuter = styled.div`
  height: ${auxHeightMobile};
  overflow: hidden;

  @media (min-width: ${breakpointSm}) {
    height: ${auxHeight};
  }
`;

export const AuxInner = styled.div`
  //   &__aux-inner {
  padding-top: 0rem;
  opacity: 1;
  transition: all 1s ease-in-out;
  display: flex;
  height: ${auxHeightMobile};
  flex-direction: column;
  justify-content: end;

  @media (min-width: ${breakpointSm}) {
    height: ${auxHeight};
  }
`;
