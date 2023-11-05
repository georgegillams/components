import styled, { css } from 'styled-components';
import { notBlack, notBlackDarkMode } from './colors';
import Text from '../text';
import { calculateHexWithoutTransparency, isLight } from '../helpers/colors';
import { shadowNormal, shadowNormalDarkMode } from './misc';

export const ColorSwatchWrapper = styled.div<{
  backgroundColor: string;
}>`
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
    color: ${isLight(
      calculateHexWithoutTransparency(backgroundColor, '#ffffff'),
    )
      ? notBlack
      : notBlackDarkMode};

    @media (prefers-color-scheme: dark) {
      color: ${isLight(
        calculateHexWithoutTransparency(backgroundColor, '#000000'),
      )
        ? notBlack
        : notBlackDarkMode};
    }
  `}

  height: 14rem;
  width: 14rem;
  border-radius: 2rem;
  padding: 2rem 1rem 4rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${shadowNormal};

  @media (prefers-color-scheme: dark) {
    box-shadow: ${shadowNormalDarkMode};
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ColorName = styled(Text)`
  line-break: anywhere;
`;
