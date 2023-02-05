import styled, { css } from 'styled-components';
import { paragraphMarginTop, paragraphMarginTopFirst } from '../constants/font';

export const StyledParagraph = styled.span<{
  padding?: boolean;
}>`
  display: inline-block;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 1.5;

  ${({ padding }) => css`
    margin-top: ${padding ? paragraphMarginTop : 0};

    &:first-of-type {
      margin-top: ${padding ? paragraphMarginTopFirst : 0};
    }
  `}
`;
