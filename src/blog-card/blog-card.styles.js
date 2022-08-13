import styled, { css } from 'styled-components';
import { notBlack, notBlackDarkMode, primaryColor } from '../constants/colors';
import { borderRadiusSm, spacingLg, spacingSm } from '../constants/layout';
import { focusStyle } from '../constants/styles';
import Image from '../image';

export const OuterContainer = styled.a`
  display: flex;
  text-decoration: none;
  width: 100%;
  height: 100%;
  flex-direction: row;
  box-sizing: border-box;
  color: ${notBlack};
  ${focusStyle(true)}

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }

  ${({ theme }) => css`
    &:focus,
    &:active,
    &:hover {
      color: ${theme?.cardHoverForegroundColor || primaryColor};

      @media (prefers-color-scheme: dark) {
        color: ${theme?.cardHoverForegroundColorDarkMode || primaryColor};
      }
    }
  `}
`;

export const LeftContainer = styled.div`
  flex-grow: 1;
`;

export const ImageContainer = styled.div`
  display: block;
  z-index: 3;
  width: 6rem;
  height: 6rem;
  justify-self: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  border-radius: 50rem;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  margin-left: ${spacingLg};
`;

export const StyledImage = styled(Image)`
  z-index: 3;
  width: 100%;
  height: 100%;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;
