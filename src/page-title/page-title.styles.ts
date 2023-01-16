import styled, { css } from 'styled-components';
import { pageMarginTop, pageTitleMarginTop } from '../constants/font';
import Text, { SIZES, TAG_NAME } from '../text';

export const Heading = styled(Text).attrs({
  size: SIZES.xxl,
  tagName: TAG_NAME.h1,
})<{
  hasLink?: boolean;
  padding?: boolean;
}>`
  margin: ${pageTitleMarginTop} 0 0 0;

  ${({ hasLink }) =>
    hasLink &&
    css`
      margin-top: ${pageMarginTop};
    `}

  ${({ padding }) =>
    !padding &&
    css`
      margin: 0;
    `}
`;

export const LinkContainer = styled.div<{
  padding?: boolean;
}>`
  margin: ${pageMarginTop} 0 0 0;

  ${({ padding }) =>
    !padding &&
    css`
      margin: 0;
    `}
`;
