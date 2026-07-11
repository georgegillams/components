import styled, { css } from 'styled-components';
import {
  copyButtonIcon,
  copyButtonIconDarkMode,
  copyButtonIconHover,
  copyButtonIconHoverDarkMode,
} from '../constants/semantic/colors';
import { focusStyle } from '../constants/styles';

import Copy from '../icon/copy';

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

export const Icon = styled(Copy)<{ theme: any }>`
  ${({ theme }) => css`
    color: ${theme?.textLinkColor || copyButtonIcon};
    fill: ${theme?.textLinkColor || copyButtonIcon};

    &:hover {
      color: ${theme?.textLinkColorHover || copyButtonIconHover};
      fill: ${theme?.textLinkColorHover || copyButtonIconHover};
    }

    @media (prefers-color-scheme: dark) {
      color: ${theme?.textLinkColorDarkMode || copyButtonIconDarkMode};
      fill: ${theme?.textLinkColorDarkMode || copyButtonIconDarkMode};

      &:hover {
        color: ${theme?.textLinkColorHoverDarkMode ||
        copyButtonIconHoverDarkMode};
        fill: ${theme?.textLinkColorHoverDarkMode ||
        copyButtonIconHoverDarkMode};
      }
    }
  `}
`;
