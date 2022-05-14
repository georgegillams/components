import styled, { css } from 'styled-components';
import {
  linkColor,
  linkColorDarkMode,
  linkColorHover,
  linkColorHoverDarkMode,
} from '../constants/colors';
import { focusStyle } from '../constants/styles';
import Copy from '../Icons/Copy';

export const Button = styled.button`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: copy;

  ${focusStyle(true)}
`;

export const Icon = styled(Copy)`
  ${({ theme }) => css`
    color: ${theme?.textLinkColor || linkColor};
    fill: ${theme?.textLinkColor || linkColor};

    &:hover {
      color: ${theme?.textLinkColorHover || linkColorHover};
      fill: ${theme?.textLinkColorHover || linkColorHover};
    }

    @media (prefers-color-scheme: dark) {
      color: ${theme?.textLinkColorDarkMode || linkColorDarkMode};
      fill: ${theme?.textLinkColorDarkMode || linkColorDarkMode};

      &:hover {
        color: ${theme?.textLinkColorHoverDarkMode || linkColorHoverDarkMode};
        fill: ${theme?.textLinkColorHoverDarkMode || linkColorHoverDarkMode};
      }
    }
  `}
`;
