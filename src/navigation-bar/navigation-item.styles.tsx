import styled from 'styled-components';
import { breakpointMd } from '../constants/layout';
import { primaryColor, primaryColorDarkMode } from '../constants/colors';

export const OuterWrapper = styled.div`
  position: relative;
`;

export const SelectionBar = styled.div`
  position: absolute;
  background: ${primaryColor};
  border-radius: 1rem;

  height: 60%;
  width: 4px;
  left: 15rem;
  top: 20%;

  @media (min-width: ${breakpointMd}) {
    height: 4px;
    width: 60%;
    top: unset;
    left: 20%;
    bottom: -1rem;
  }

  @media (prefers-color-scheme: dark) {
    background: ${primaryColorDarkMode};
  }
`;
