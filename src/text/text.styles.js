import styled, { css } from 'styled-components';
import {
  fontSizeXxl,
  fontSizeXl,
  fontSizeLg,
  fontSizeMd,
  fontSizeSm,
  fontSizeXs,
} from '../constants/font';
import { SIZES } from './constants.js';

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

export const StyledText = styled.span`
  margin: 0;
  ${(props) => sizeStyles[props.size]}
`;
