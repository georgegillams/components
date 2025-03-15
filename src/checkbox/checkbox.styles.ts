import styled, { css } from 'styled-components';
import {
  backgroundColor,
  backgroundColorDarkMode,
  bpkColorMonteverde,
  bpkColorPanjin,
  disabledBackgroundColor,
  disabledBackgroundColorDarkMode,
  disabledColor,
  disabledColorDarkMode,
  notBlack,
  notBlackDarkMode,
  primaryColor,
  primaryColorDarkMode,
} from '../constants/colors';
import { focusStyle } from '../constants/styles';
import TickIcon from '../icon/tick';
import { borderRadiusSm } from '../constants/layout';

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`;

export const Input = styled.input<{
  valid?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: ${borderRadiusSm};
  background: ${backgroundColor};
  box-shadow: 0 0 0 1px #cdcdd7 inset;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ${focusStyle(false)}

  @media (prefers-color-scheme: dark) {
    background: ${backgroundColorDarkMode};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${disabledBackgroundColor};
      cursor: inherit;

      @media (prefers-color-scheme: dark) {
        background-color: ${disabledBackgroundColorDarkMode};
      }
    `}

  ${({ valid }) => {
    switch (valid) {
      case true:
        return css`
          box-shadow: 0 0 0 1px ${bpkColorMonteverde} inset;
        `;
      case false:
        return css`
          box-shadow: 0 0 0 1px ${bpkColorPanjin} inset;
        `;
      default:
        return null;
    }
  }}
`;

export const Icon = styled(TickIcon)<{
  checked?: boolean;
  disabled?: boolean;
  valid?: boolean;
}>`
  position: absolute;
  top: 0.12rem;
  left: 0.15rem;
  display: none;
  pointer-events: none;
  color: ${primaryColor};
  fill: ${primaryColor};

  @media (prefers-color-scheme: dark) {
    color: ${primaryColorDarkMode};
    fill: ${primaryColorDarkMode};
  }

  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.checkboxTickColor};
      fill: ${theme.checkboxTickColor};

      @media (prefers-color-scheme: dark) {
        color: ${theme.checkboxTickColorDarkMode};
        fill: ${theme.checkboxTickColorDarkMode};
      }
    `}

  ${({ checked }) =>
    checked &&
    css`
      display: inherit;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${disabledColor};
      fill: ${disabledColor};

      @media (prefers-color-scheme: dark) {
        color: ${disabledColorDarkMode};
        fill: ${disabledColorDarkMode};
      }
    `}

     ${({ valid }) => {
    switch (valid) {
      case true:
        return css`
          color: ${bpkColorMonteverde};
          fill: ${bpkColorMonteverde};
        `;
      case false:
        return css`
          color: ${bpkColorPanjin};
          fill: ${bpkColorPanjin};
        `;
      default:
        return null;
    }
  }}
`;

export const VisibleLabel = styled.div<{
  disabled?: boolean;
}>`
  margin-left: 0.5rem;
  color: ${notBlack};
  font-size: 1.2rem;

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${disabledBackgroundColor};
    `}
`;
