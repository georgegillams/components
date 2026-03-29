import styled, { css, keyframes } from 'styled-components';

import {
  backgroundColorElevated,
  backgroundColorElevatedDarkMode,
  notBlack,
  notBlackDarkMode,
  subtleOutlineColor,
  subtleOutlineColorDarkMode,
} from '../constants/colors';
import {
  borderRadiusMd,
  breakpointSm,
  modalScrimZIndex,
  modalZIndex,
  spacingBase,
  spacingLg,
} from '../constants/layout';
import { shadowNormal, shadowNormalDarkMode } from '../constants/misc';
import { focusStyle } from '../constants/styles';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.99); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const Scrim = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${modalScrimZIndex};
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.18s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (prefers-reduced-transparency: reduce) {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const Viewport = styled.div`
  --modal-padding-x: ${spacingBase};
  --modal-padding-y: ${spacingLg};

  position: fixed;
  inset: 0;
  z-index: ${modalZIndex};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--modal-padding-y) var(--modal-padding-x);
  overflow: hidden;
  box-sizing: border-box;

  @media (min-width: ${breakpointSm}) {
    --modal-padding-x: ${spacingLg};
  }
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100vw - 2 * var(--modal-padding-x));
  max-height: calc(100vh - 2 * var(--modal-padding-y));
  min-height: 0;
  border-radius: ${borderRadiusMd};
  box-shadow: ${shadowNormal};
  background-color: ${backgroundColorElevated};
  color: ${notBlack};
  animation: ${popIn} 0.18s ease-out;

  @media (prefers-color-scheme: dark) {
    box-shadow: ${shadowNormalDarkMode};
    background-color: ${backgroundColorElevatedDarkMode};
    color: ${notBlackDarkMode};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const HeaderRow = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${spacingBase};
  padding: ${spacingLg};
  border-bottom: 1px solid ${subtleOutlineColor};

  @media (prefers-color-scheme: dark) {
    border-bottom-color: ${subtleOutlineColorDarkMode};
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.25;
`;

export const CloseButton = styled.button.attrs({ type: 'button' })`
  ${focusStyle(true)}

  flex: 0 0 auto;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem 0 0;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  line-height: 1;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const Body = styled.div<{
  padded?: boolean;
}>`
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  ${({ padded }) =>
    padded !== false &&
    css`
      padding: ${spacingLg};
    `}
`;

