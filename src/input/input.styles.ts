import styled, { css } from 'styled-components';

import {
  backgroundColor,
  backgroundColorDarkMode,
  bpkColorMonteverde,
  bpkColorPanjin,
  notBlack,
  notBlackDarkMode,
} from '../constants/colors';
import { focusStyle } from '../constants/styles';
import { fontSizeSm } from '../constants/font';
import { ComponentType } from 'react';
import { borderRadiusSm } from '../constants/layout';

export const InputWrapper = styled.div<{
  disabled?: boolean;
}>`
  ${focusStyle(true, true)}

  display: flex;
  align-items: center;
  border: 1px #b2b2bf solid;
  border-radius: ${borderRadiusSm};
  background-color: ${backgroundColor};

  @media (prefers-color-scheme: dark) {
    border-color: white;
    background-color: ${backgroundColorDarkMode};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: #f1f2f8;

      @media (prefers-color-scheme: dark) {
        border-color: #6a6a6a;
      }
    `}
`;

export const styleInputComponent = (InputComponent: ComponentType) => styled(
  InputComponent,
)`
  padding: 0.375rem 0.75rem;
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${notBlack};
  font-size: ${fontSizeSm};

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }

  &:disabled {
    color: #b2b2bf;

    @media (prefers-color-scheme: dark) {
      color: #7b7b86;
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
