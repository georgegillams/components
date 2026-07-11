import styled, { css } from 'styled-components';
import { borderRadiusMd, spacingLg } from '../constants/primitive/layout';
import {
  cardDisabledBackground,
  cardDisabledBackgroundDarkMode,
  cardDisabledForeground,
  cardDisabledForegroundDarkMode,
  cardHighlightBackground,
  cardHighlightBackgroundDarkMode,
  cardImageBackground,
  cardImageBackgroundDarkMode,
  cardImageBackgroundLight,
  cardImageBackgroundLightDarkMode,
} from '../constants/semantic/colors';
import {
  shadowHover,
  shadowHoverDarkMode,
  shadowNormal,
  shadowNormalDarkMode,
} from '../constants/semantic/elevation';
import { focusStyle } from '../constants/styles';
import { durationSm } from '../constants/primitive/timings';

const outerStyles = css<{
  atomic?: boolean;
  disabled?: boolean;
  interactive?: boolean;
}>`
  position: relative;
  // a tag needs display: inline-block
  display: inline-block;
  z-index: 1;
  width: 100%;
  text-decoration: none;
  box-shadow: ${shadowNormal};
  box-sizing: border-box;
  // revert button tag default styles
  padding: 0;
  transition: all ${durationSm};
  border: none;
  border-radius: ${borderRadiusMd};
  background: none;
  text-align: left;

  ${({ disabled, interactive }) =>
    disabled
      ? css`
          cursor: not-allowed;
        `
      : interactive
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: unset;
        `}

  @media (prefers-color-scheme: dark) {
    box-shadow: ${shadowNormalDarkMode};
  }

  ${(props) =>
    props.atomic &&
    props.interactive &&
    css`
      ${focusStyle(true)};
    `}

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

export const OuterDiv = styled.div`
  ${outerStyles}
`;

export const OuterLink = styled.a`
  ${outerStyles}
`;

export const CardOverlayLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
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
  border-radius: ${borderRadiusMd};
  overflow: hidden;

  ${({ highlighted, theme }) =>
    highlighted &&
    css`
      background-color: ${theme?.cardHighlightColor || cardHighlightBackground};

      @media (prefers-color-scheme: dark) {
        background-color: ${theme?.cardHighlightColorDarkMode ||
        cardHighlightBackgroundDarkMode};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${cardDisabledBackground};
      color: ${cardDisabledForeground};

      @media (prefers-color-scheme: dark) {
        background-color: ${cardDisabledBackgroundDarkMode};
        color: ${cardDisabledForegroundDarkMode};
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
  background-color: ${cardImageBackground};
  background-position: center;
  background-size: cover;

  @media (prefers-color-scheme: dark) {
    background-color: ${cardImageBackgroundDarkMode};
  }

  ${({ light }) =>
    light &&
    css`
      background-color: ${cardImageBackgroundLight};

      @media (prefers-color-scheme: dark) {
        background-color: ${cardImageBackgroundLightDarkMode};
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
  hasOverlayLink?: boolean;
}>`
  height: 100%;

  ${({ hasOverlayLink }) =>
    hasOverlayLink &&
    css`
      position: relative;
      z-index: 2;
      pointer-events: none;

      a,
      button,
      input,
      select,
      textarea,
      [role='button'],
      [tabindex]:not([tabindex='-1']) {
        pointer-events: auto;
      }
    `}

  ${({ padded }) =>
    padded &&
    css`
      padding: ${spacingLg};
    `}
`;
