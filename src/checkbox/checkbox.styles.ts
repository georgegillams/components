import styled, { css } from 'styled-components';
import {
  checkboxBackground,
  checkboxBackgroundDarkMode,
  checkboxBackgroundDisabled,
  checkboxBackgroundDisabledDarkMode,
  checkboxBorder,
  checkboxBorderInvalid,
  checkboxBorderValid,
  checkboxLabel,
  checkboxLabelDarkMode,
  checkboxLabelDisabled,
  checkboxTick,
  checkboxTickDarkMode,
  checkboxTickDisabled,
  checkboxTickDisabledDarkMode,
  checkboxTickInvalid,
  checkboxTickValid,
} from '../constants/semantic/colors';
import { focusStyle } from '../constants/styles';
import TickIcon from '../icon/tick';
import { borderRadiusSm } from '../constants/primitive/layout';
import { fontSizeMd } from '../constants/primitive/font';

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
  background: ${checkboxBackground};
  box-shadow: 0 0 0 1px ${checkboxBorder} inset;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ${focusStyle(false)}

  @media (prefers-color-scheme: dark) {
    background: ${checkboxBackgroundDarkMode};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${checkboxBackgroundDisabled};
      cursor: inherit;

      @media (prefers-color-scheme: dark) {
        background-color: ${checkboxBackgroundDisabledDarkMode};
      }
    `}

  ${({ valid }) => {
    switch (valid) {
      case true:
        return css`
          box-shadow: 0 0 0 1px ${checkboxBorderValid} inset;
        `;
      case false:
        return css`
          box-shadow: 0 0 0 1px ${checkboxBorderInvalid} inset;
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
  color: ${checkboxTick};
  fill: ${checkboxTick};

  @media (prefers-color-scheme: dark) {
    color: ${checkboxTickDarkMode};
    fill: ${checkboxTickDarkMode};
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
      color: ${checkboxTickDisabled};
      fill: ${checkboxTickDisabled};

      @media (prefers-color-scheme: dark) {
        color: ${checkboxTickDisabledDarkMode};
        fill: ${checkboxTickDisabledDarkMode};
      }
    `}

     ${({ valid }) => {
    switch (valid) {
      case true:
        return css`
          color: ${checkboxTickValid};
          fill: ${checkboxTickValid};
        `;
      case false:
        return css`
          color: ${checkboxTickInvalid};
          fill: ${checkboxTickInvalid};
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
  color: ${checkboxLabel};
  font-size: ${fontSizeMd};

  @media (prefers-color-scheme: dark) {
    color: ${checkboxLabelDarkMode};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${checkboxLabelDisabled};
    `}
`;
