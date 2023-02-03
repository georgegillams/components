import styled, { css } from 'styled-components';

import TextLink from '../text-link';
import Text from '../text';
import { notBlack, notBlackDarkMode } from '../constants/colors';
import { breakpointMd } from '../constants/layout';
import {
  fontSizeLg,
  fontSizeXl,
  sectionMarginTop,
  subsectionMarginTop,
} from '../constants/font';

export const Outer = styled.div`
  width: 100%;
  color: ${notBlack};
  text-decoration: none;

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }
`;

export const StyledLinkContainer = styled.div<{
  isSubsection: boolean;
}>`
  position: absolute;
  margin-top: -2px;
  opacity: 0.5;
  margin-left: -5px;

  ${({ isSubsection }) =>
    isSubsection &&
    css`
      margin-top: -4px;
    `}

  @media (min-width: ${breakpointMd}) {
    margin-left: -1.4rem;
  }

  @media (prefers-color-scheme: dark) {
    opacity: 0.8;
  }
`;

export const StyledLink = styled(TextLink)<{
  isSubsection: boolean;
}>`
  ${({ isSubsection }) =>
    isSubsection &&
    css`
      font-size: ${isSubsection ? fontSizeLg : fontSizeXl};
      line-height: ${isSubsection ? '2.2rem' : '2.8rem'};
    `}
`;

export const StyledText = styled(Text)<{
  anchor: boolean;
  padding: boolean;
  isSubsection: boolean;
  id: string;
}>`
  ${({ anchor }) =>
    anchor &&
    css`
      padding-left: 1rem;

      @media (min-width: ${breakpointMd}) {
        padding-left: unset;
      }
    `}

  ${({ padding, isSubsection }) =>
    padding
      ? css`
          margin: ${isSubsection ? subsectionMarginTop : sectionMarginTop} 0 0 0;
        `
      : css`
          margin: 0;
        `}
`;
