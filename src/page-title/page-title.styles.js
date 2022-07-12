import styled, { css } from 'styled-components';
import { pageMarginTop, pageTitleMarginTop } from '../constants/font';
import Text, { SIZES } from '../text';

export const Heading = styled(Text).attrs({
  size: SIZES.xxl,
  tagName: 'h1',
})`
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

export const LinkContainer = styled.div`
  margin: ${pageMarginTop} 0 0 0;

  ${({ padding }) =>
    !padding &&
    css`
      margin: 0;
    `}
`;
