import styled from 'styled-components';
import {
  linkColor,
  linkColorDarkMode,
  linkColorHover,
  linkColorHoverDarkMode,
} from '../constants/colors';
import Text from '../text';
import { focusStyle } from '../constants/styles';
import NewWindow from '../Icons/NewWindow';

export const Anchor = styled(Text)`
  display: inline-block;
  border-radius: 0.25rem;
  font-weight: bold;
  text-decoration: none;

  ${focusStyle(true)}

  color: ${({ theme }) => theme?.textLinkColor || linkColor};
  fill: ${({ theme }) => theme?.textLinkColor || linkColor};

  &:hover {
    color: ${({ theme }) => theme?.textLinkColorHover || linkColorHover};
    fill: ${({ theme }) => theme?.textLinkColorHover || linkColorHover};
  }

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme?.textLinkColorDarkMode || linkColorDarkMode};
    fill: ${({ theme }) => theme?.textLinkColorDarkMode || linkColorDarkMode};

    &:hover {
      color: ${({ theme }) =>
        theme?.textLinkColorHoverDarkMode || linkColorHoverDarkMode};
      fill: ${({ theme }) =>
        theme?.textLinkColorHoverDarkMode || linkColorHoverDarkMode};
    }
  }
`;

export const IconContainer = styled.div`
  display: inline-flex;
  width: 0.4rem;
  height: 1rem;
  margin-left: 0.55rem;
`;

export const Icon = styled(NewWindow)`
  position: absolute;
  width: 1rem;
  height: 1rem;
  margin-top: 0.12rem;
  margin-left: -0.45rem;
`;
