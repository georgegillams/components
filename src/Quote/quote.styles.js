import styled, { css } from 'styled-components';
import { bpkColorSkyGrayTint01, primaryColor } from '../constants/colors';
import { spacingBase } from '../constants/layout';

export const Container = styled.div`
  padding: ${spacingBase} 0 ${spacingBase} 2rem;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  color: ${bpkColorSkyGrayTint01};
  font-style: italic;
  font-weight: bold;
  box-shadow: 1rem 1rem 1rem #f3f2f5;

  ${({ theme }) =>
    theme &&
    css`
      border-left: solid 0.3rem ${theme?.quoteBarColor || primaryColor};

      @media (prefers-color-scheme: dark) {
        border-left: solid 0.3rem
          ${theme?.quoteBarColorDarkMode || primaryColor};
        color: $not-black-invert;
        box-shadow: 1rem 1rem 1rem black;
      }
    `}
`;
