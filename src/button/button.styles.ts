import styled, { css, keyframes } from 'styled-components';
import { focusStyle } from '../constants/styles';
import { createStylesForButtonType } from './button-style-helpers';
import { BUTTON_SIZES, BUTTON_TYPES } from './constants';

const ggBounceHoverEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const outerStyles = css<{
  buttonType: BUTTON_TYPES;
  size: BUTTON_SIZES;
  disabled?: boolean;
}>`
  position: relative;
  min-width: 5rem;
  // average vertical padding of 0.375rem
  padding: 0.43rem 1.125rem 0.32rem 1.125rem;
  transition: filter 0.3s;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: normal;
  cursor: pointer;
  text-decoration-color: transparent;
  text-decoration-line: none;

  ${focusStyle()}

  ${({ buttonType, theme }) => createStylesForButtonType(buttonType, theme)}


  ${({ size }) =>
    size === BUTTON_SIZES.large &&
    css`
      min-width: 7rem;
      // average vertical padding of 0.4rem
      padding: 0.455rem 1.4rem 0.345rem 1.4rem;
      font-size: 1.6rem;
      border-radius: 0.75rem;
    `}

  ${({ buttonType }) =>
    buttonType === BUTTON_TYPES.bouncy &&
    css`
      min-width: unset;
      padding: 0.2rem 0.8rem;

      &:focus,
      &:active,
      &:hover {
        animation-duration: 0.4s;
        animation-name: ${ggBounceHoverEffect};
      }
    `}


    ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`;

export const StyledButton = styled.button`
  ${outerStyles}
`;

export const StyledLink = styled.a`
  ${outerStyles};
  display: inline-block;
`;

export const applyStylesToAnchor = (anchor: React.ComponentType) => styled(
  anchor,
)`
  ${outerStyles};
  display: inline-block;
`;

export const ChildContainer = styled.span<{
  $loading?: boolean;
}>`
  display: flex;
  justify-content: center;
  ${({ $loading }) =>
    $loading &&
    css`
      opacity: 0.1;
    `}
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
