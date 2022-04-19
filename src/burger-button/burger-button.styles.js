import styled, { css } from 'styled-components';
import { focusStyle } from '../constants/styles';
import { notBlack, notBlackDarkMode } from '../constants/colors';

export const OuterWrapper = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: transparent;

  ${focusStyle(true)}
`;

export const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Line = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 0.1rem;
  transition: all 0.4s ease;
  background-color: ${notBlack};

  @media (prefers-color-scheme: dark) {
    background-color: ${notBlackDarkMode};
  }

  &:nth-child(1n) {
    top: calc(25% - 0.05rem);
  }

  &:nth-child(2n) {
    top: calc(50% - 0.05rem);
  }

  &:nth-child(3n) {
    top: calc(75% - 0.05rem);
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      &:nth-child(1n) {
        top: calc(50% - 0.05rem);
        transform: rotate(45deg);
      }

      &:nth-child(2n) {
        transform: scale(0, 1), rotate(-45deg);
      }

      &:nth-child(3n) {
        top: calc(50% - 0.05rem);
        transform: rotate(-45deg);
      }
    `}
`;
