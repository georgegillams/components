import styled from 'styled-components';
import { breakpointMd, spacingLg, spacingXs } from '../constants/layout';
import { primaryColor, primaryColorDarkMode } from '../constants/colors';

export const OuterWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledLi = styled.li`
  margin-left: ${spacingLg};

  @media (min-width: ${breakpointMd}) {
    margin-left: unset;
  }
`;

export const SelectionBar = styled.div`
  position: absolute;
  background: ${primaryColor};
  border-radius: 1rem;

  height: 60%;
  width: 4px;
  left: calc(2 * ${spacingXs});
  top: 20%;

  @media (min-width: ${breakpointMd}) {
    height: 4px;
    width: 60%;
    top: unset;
    left: 20%;
    bottom: ${spacingXs};
  }

  @media (prefers-color-scheme: dark) {
    background: ${primaryColorDarkMode};
  }
`;
