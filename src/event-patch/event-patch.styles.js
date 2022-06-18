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
import { shadowNormal, shadowNormalInvert } from '../constants/misc';

export const Wrapper = styled.div`
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
    box-shadow: ${shadowNormalInvert};
  }

  ${({ background, foreground }) => {
    return css`
      background: ${background};
      color: ${foreground};
      fill: ${foreground};
    `;
  }}
`;

export const EventName = styled(Text).attrs({ size: SIZES.xxl })``;

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
