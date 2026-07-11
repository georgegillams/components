import styled, { css } from 'styled-components';

import { borderRadiusSm, spacingXs } from '../constants/primitive/layout';
import { fontSizeSm } from '../constants/primitive/font';
import {
  inputBackground,
  inputBackgroundDarkMode,
  inputBorder,
  inputBorderDarkMode,
  inputBorderDisabled,
  inputBorderDisabledDarkMode,
  inputFieldBackground,
  inputForeground,
  inputForegroundDarkMode,
  inputForegroundDisabled,
  inputForegroundDisabledDarkMode,
  inputIconInvalid,
  inputIconValid,
} from '../constants/semantic/colors';
import { focusStyle } from '../constants/styles';
import { ComponentType } from 'react';

export const InputWrapper = styled.div<{
  disabled?: boolean;
}>`
  ${focusStyle(true, true)}

  display: flex;
  align-items: center;
  border: 1px ${inputBorder} solid;
  border-radius: ${borderRadiusSm};
  background-color: ${inputBackground};

  @media (prefers-color-scheme: dark) {
    border-color: ${inputBorderDarkMode};
    background-color: ${inputBackgroundDarkMode};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${inputBorderDisabled};

      @media (prefers-color-scheme: dark) {
        border-color: ${inputBorderDisabledDarkMode};
      }
    `}
`;

export const styleInputComponent = (InputComponent: ComponentType) => styled(
  InputComponent,
)`
  padding: ${spacingXs} 0.75rem;
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: ${inputFieldBackground};
  color: ${inputForeground};
  font-size: ${fontSizeSm};
  border-radius: 0.4375rem;

  @media (prefers-color-scheme: dark) {
    color: ${inputForegroundDarkMode};
  }

  &:disabled {
    color: ${inputForegroundDisabled};

    @media (prefers-color-scheme: dark) {
      color: ${inputForegroundDisabledDarkMode};
    }
  }
`;

export const styleIconComponent = (IconComponent: ComponentType) => styled(
  IconComponent,
)<{
  valid?: boolean;
}>`
  margin-right: 0.5rem;

  ${({ valid }) => {
    switch (valid) {
      case true:
        return css`
          color: ${inputIconValid};
          fill: ${inputIconValid};
        `;
      case false:
        return css`
          color: ${inputIconInvalid};
          fill: ${inputIconInvalid};
        `;
      default:
        return null;
    }
  }}
`;
