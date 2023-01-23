import styled, { css } from 'styled-components';
import {
  disabledColorDarkMode,
  disabledBackgroundColor,
  disabledBackgroundColorDarkMode,
  disabledColor,
  notBlack,
  notBlackDarkMode,
  backgroundColorElevated,
  backgroundColorElevatedDarkMode,
  primaryColor,
  primaryColorDark,
} from '../constants/colors';
import { spacingLg } from '../constants/layout';
import {
  shadowHover,
  shadowHoverDarkMode,
  shadowNormal,
  shadowNormalDarkMode,
} from '../constants/misc';
import { focusStyle } from '../constants/styles';

const outerStyles = css<{
  atomic?: boolean;
}>`
  position: relative;
  // a tag needs display: inline-block
  display: inline-block;
  z-index: 1;
  width: 100%;
  text-decoration: none;
  box-shadow: ${shadowNormal};
  cursor: pointer;
  box-sizing: border-box;
  // revert button tag default styles
  padding: 0;
  transition: all 0.4s;
  border: none;
  border-radius: 0.35rem;
  background: none;
  text-align: left;

  @media (prefers-color-scheme: dark) {
    box-shadow: ${shadowNormalDarkMode};
  }

  ${(props) =>
    props.atomic &&
    css`
      ${focusStyle(true)};
    `}

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled) {
    &:focus,
    &:focus-within,
    &:active,
    &:hover {
      box-shadow: ${shadowHover};

      @media (prefers-color-scheme: dark) {
        box-shadow: ${shadowHoverDarkMode};
      }
    }
  }
`;

export const OuterButton = styled.button.attrs({ type: 'button' })`
  ${outerStyles}
`;

export const OuterLink = styled.a`
  ${outerStyles}
`;

export const applyStylesToAnchor = (anchor: React.ComponentType) => styled(
  anchor,
)`
  ${outerStyles}
`;

export const ContentOuterWrapper = styled.div<{
  highlighted?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.35rem;
  overflow: hidden;

  ${({ highlighted, theme }) =>
    highlighted &&
    css`
      background-color: ${theme?.cardHighlightColor || primaryColor};

      @media (prefers-color-scheme: dark) {
        background-color: ${theme?.cardHighlightColorDarkMode ||
        primaryColorDark};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${disabledBackgroundColor};
      color: ${disabledColor};

      @media (prefers-color-scheme: dark) {
        background-color: ${disabledBackgroundColorDarkMode};
        color: ${disabledColorDarkMode};
      }
    `}
`;

export const BackgroundImageContainer = styled.div<{
  light?: boolean;
  fillImageSrc?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: calc(100% + 2rem);
  height: calc(100% + 2rem);
  margin-top: -1rem;
  margin-left: -1rem;
  background-color: ${notBlackDarkMode};
  background-position: center;
  background-size: cover;

  @media (prefers-color-scheme: dark) {
    background-color: ${notBlack};
  }

  ${({ light }) =>
    light &&
    css`
      background-color: ${backgroundColorElevated};

      @media (prefers-color-scheme: dark) {
        background-color: ${backgroundColorElevatedDarkMode};
      }
    `}

  ${({ fillImageSrc }) =>
    fillImageSrc &&
    css`
      background-image: url(${fillImageSrc});
    `}
`;

export const ChildrenContainer = styled.div<{
  padded?: boolean;
}>`
  height: 100%;

  ${({ padded }) =>
    padded &&
    css`
      padding: ${spacingLg};
    `}
`;
