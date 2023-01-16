import styled, { css } from 'styled-components';
import {
  fontSizeXxl,
  fontSizeXl,
  fontSizeLg,
  fontSizeMd,
  fontSizeSm,
  fontSizeXs,
} from '../constants/font';
import { SIZES } from './constants';

export interface TextComponentProps {
  size: string;
  children: React.ReactNode;
}

export interface TextProps extends TextComponentProps {
  tagName: string;
}

const sizeStyles = {
  [SIZES.xxl]: css`
    font-size: ${fontSizeXxl};
    font-weight: bold;
  `,
  [SIZES.xl]: css`
    font-size: ${fontSizeXl};
    font-weight: bold;
  `,
  [SIZES.lg]: css`
    font-size: ${fontSizeLg};
    font-weight: bold;
  `,
  [SIZES.md]: css`
    font-size: ${fontSizeMd};
  `,
  [SIZES.sm]: css`
    font-size: ${fontSizeSm};
  `,
  [SIZES.xs]: css`
    font-size: ${fontSizeXs};
  `,
  [SIZES.inherit]: css``,
};

export const commonStyles = css`
  margin: 0;
  ${(props: TextProps) => sizeStyles[props.size]}
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
