import styled, { css } from 'styled-components';
import {
  borderRadiusSm,
  spacingBase,
  spacingLg,
  spacingSm,
  spacingXs,
} from '../constants/layout';
import Text, { SIZES } from '../text';
import TextLink from '../text-link';
import { shadowNormal, shadowNormalDarkMode } from '../constants/misc';

export const Wrapper = styled.div<{
  background: string;
  foreground: string;
  showDarkModeOutline?: boolean;
}>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: calc(3 * ${spacingBase});
  min-width: calc(8 * ${spacingLg});
  border-radius: ${borderRadiusSm};
  box-shadow: ${shadowNormal};

  @media (prefers-color-scheme: dark) {
    box-shadow: ${shadowNormalDarkMode};
  }

  ${({ background, foreground, showDarkModeOutline }) => {
    return css`
      background: ${background};
      color: ${foreground};
      fill: ${foreground};

      @media (prefers-color-scheme: dark) {
        ${showDarkModeOutline && `box-shadow: inset 0px 0px 0px 2px white;`}
      }
    `;
  }}
`;

export const EventName = styled(Text).attrs({ size: SIZES.xxl })`
  text-align: center;
`;

export const EventYear = styled(Text)`
  margin-top: ${spacingSm};
`;

export const LinkContainer = styled.div`
  position: absolute;
  right: ${spacingXs};
  bottom: ${spacingXs};
`;

export const StravaLink = styled(TextLink).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``;
