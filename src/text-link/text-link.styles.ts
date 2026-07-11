import React from 'react';
import styled, { css } from 'styled-components';
import {
  textLink,
  textLinkDarkMode,
  textLinkHover,
  textLinkHoverDarkMode,
} from '../constants/semantic/colors';
import { focusStyle } from '../constants/styles';

import NewWindow from '../icon/new-window';

const anchorStyles = css`
  display: inline-block;
  border-radius: 0.25rem;
  font-weight: bold;
  text-decoration: none;
  position: relative;

  ${focusStyle(true)}

  color: ${({ theme }) => theme?.textLinkColor || textLink};
  fill: ${({ theme }) => theme?.textLinkColor || textLink};

  &:hover {
    color: ${({ theme }) => theme?.textLinkColorHover || textLinkHover};
    fill: ${({ theme }) => theme?.textLinkColorHover || textLinkHover};
  }

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme?.textLinkColorDarkMode || textLinkDarkMode};
    fill: ${({ theme }) => theme?.textLinkColorDarkMode || textLinkDarkMode};

    &:hover {
      color: ${({ theme }) =>
        theme?.textLinkColorHoverDarkMode || textLinkHoverDarkMode};
      fill: ${({ theme }) =>
        theme?.textLinkColorHoverDarkMode || textLinkHoverDarkMode};
    }
  }
`;

export const Anchor = styled.a`
  ${anchorStyles}
`;

export const applyStylesToAnchor = (component: React.ComponentType) => styled(
  component,
)`
  ${anchorStyles}
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
