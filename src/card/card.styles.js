import styled, { css } from 'styled-components';
import {
  disabledColorDarkMode,
  disabledBackgroundColor,
  disabledBackgroundColorDarkMode,
  disabledColor,
  notBlack,
  notBlackDarkMode,
  backgroundColorElevated,
  backgroundColorElevatedinvert,
  backgroundColorElevatedDarkMode,
} from '../constants/colors';
import { spacingLg } from '../constants/layout';
import {
  shadowHover,
  shadowHoverDarkMode,
  shadowNormal,
  shadowNormalDarkMode,
} from '../constants/misc';
import { focusStyle } from '../constants/styles';

const outerStyles = (props) => css`
  position: relative;
  display: inline-block; // a tag needs this
  z-index: 1;
  width: 100%;
  padding: 0; // button tag applies padding
  transition: all 0.4s;
  border: none; // button tag applies border
  border-radius: 0.35rem;
  background: none; // override system button style
  text-align: left; // button tag centers things by default
  text-decoration: none;
  box-shadow: ${shadowNormal};
  cursor: pointer;
  box-sizing: border-box;

  @media (prefers-color-scheme: dark) {
    box-shadow: ${shadowNormalDarkMode};
  }

  ${props.atomic &&
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
  ${(props) => outerStyles(props)}
`;

export const OuterLink = styled.a`
  ${(props) => outerStyles(props)}
`;

export const ContentOuterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.35rem;
  overflow: hidden;

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

export const ContentInnerWrapper = styled.div`
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
export const ChildrenContainer = styled.div`
  ${({ padded }) =>
    padded &&
    css`
      padding: ${spacingLg};
    `}
`;

//   &__background {
// }
