import styled, { css } from 'styled-components';
import {
  fontSizeXxl,
  fontSizeXl,
  fontSizeLg,
  fontSizeMd,
  fontSizeSm,
  fontSizeXs,
} from '../constants/font';
import { SIZE } from './constants';

const sizeStyles = {
  [SIZE.xxl]: css`
    font-size: ${fontSizeXxl};
    font-weight: bold;
  `,
  [SIZE.xl]: css`
    font-size: ${fontSizeXl};
    font-weight: bold;
  `,
  [SIZE.lg]: css`
    font-size: ${fontSizeLg};
    font-weight: bold;
  `,
  [SIZE.md]: css`
    font-size: ${fontSizeMd};
  `,
  [SIZE.sm]: css`
    font-size: ${fontSizeSm};
  `,
  [SIZE.xs]: css`
    font-size: ${fontSizeXs};
  `,
  [SIZE.inherit]: css``,
};

export const commonStyles = css<{
  size: SIZE;
}>`
  margin: 0;
  ${(props) => sizeStyles[props.size]}
`;

export const StyledH1 = styled.h1`
  ${commonStyles}
`;

export const StyledH2 = styled.h1`
  ${commonStyles}
`;

export const StyledH3 = styled.h1`
  ${commonStyles}
`;

export const StyledH4 = styled.h1`
  ${commonStyles}
`;

export const StyledSpan = styled.span`
  ${commonStyles}
`;

export const StyledP = styled.p`
  ${commonStyles}
`;
