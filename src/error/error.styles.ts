import styled from 'styled-components';
import {
  destructiveColor,
  destructiveColorDarkMode,
} from '../constants/colors';

export const Error = styled.span`
  color: ${destructiveColor};
  fill: ${destructiveColor};

  @media (prefers-color-scheme: dark) {
    color: ${destructiveColorDarkMode};
    fill: ${destructiveColorDarkMode};
  }
`;
