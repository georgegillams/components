import styled from 'styled-components';
import { borderRadiusMd, spacingBase } from '../constants/layout';
import {
  backgroundColorElevated,
  backgroundColorElevatedDarkMode,
  notBlack,
  notBlackDarkMode,
} from '../constants/colors';
import { shadowNormal, shadowNormalDarkMode } from '../constants/misc';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: ${borderRadiusMd};
  box-shadow: ${shadowNormal};
  background-color: ${backgroundColorElevated};

  @media (prefers-color-scheme: dark) {
    box-shadow: ${shadowNormalDarkMode};
    background-color: ${backgroundColorElevatedDarkMode};
  }
`;

export const TitleWrapper = styled.div`
  padding: ${spacingBase};
  color: ${notBlack};

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }
`;

export const FooterWrapper = styled.div`
  padding: ${spacingBase};
`;

export const StyledIFrame = styled.iframe`
  width: 100%;
  height: 500px;
  max-height: calc(100vh - 200px);
  min-height: 200px;
  border: none;
`;
