import styled, { css } from 'styled-components';
import Card from '../card';
import { notBlack, notBlackDarkMode, primaryColor } from '../constants/colors';
import { breakpointSm } from '../constants/layout';
import Image from '../image';
import { FEATURE_CARD_LAYOUTS } from './constants';

export const StyledCard = styled(Card)<{
  layout: FEATURE_CARD_LAYOUTS;
}>`
  color: ${notBlack};

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }

  ${({ theme }) => css`
    &:focus,
    &:active,
    &:hover {
      color: ${theme?.cardHoverForegroundColor || primaryColor};

      @media (prefers-color-scheme: dark) {
        color: ${theme?.cardHoverForegroundColorDarkMode || primaryColor};
      }
    }
  `}

  ${({ layout }) => {
    switch (layout) {
      case FEATURE_CARD_LAYOUTS.narrowCompact:
        return css`
          width: 25rem;
          max-width: 25rem;
        `;
      default:
        return null;
    }
  }}
`;

export const OuterContainer = styled.div<{
  layout: FEATURE_CARD_LAYOUTS;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: ${breakpointSm}) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  ${({ layout }) => {
    switch (layout) {
      case FEATURE_CARD_LAYOUTS.narrowCompact:
        return css`
          justify-content: center;
        `;
      case FEATURE_CARD_LAYOUTS.auto:
        return css`
          justify-content: center;
          align-content: space-around;

          @media (min-width: ${breakpointSm}) {
            justify-content: unset;
            align-content: unset;
          }
        `;
      default:
        return null;
    }
  }}
`;

export const AnnotationsContainer = styled.div<{
  layout: FEATURE_CARD_LAYOUTS;
}>`
  position: relative;
  z-index: 3;
  border-radius: 0.35rem;
  overflow: hidden;
  box-sizing: border-box;
  width: 6.5rem;
  align-items: center;
  text-align: center;

  ${({ layout }) =>
    layout === FEATURE_CARD_LAYOUTS.narrowCompact &&
    css`
      display: none;
    `}
`;

export const CenterContainer = styled.div<{
  layout?: FEATURE_CARD_LAYOUTS;
}>`
  display: flex;
  z-index: 3;
  min-width: 100%;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  text-align: center;

  @media (min-width: ${breakpointSm}) {
    min-width: 10rem;
    text-align: unset;
  }

  ${({ layout }) => {
    switch (layout) {
      case FEATURE_CARD_LAYOUTS.narrowCompact:
        return css`
          min-width: unset;
          justify-content: center;
        `;
    }
  }}
`;

export const ImageContainer = styled.div`
  display: block;
  z-index: 3;
  width: 6rem;
  height: 6rem;
  justify-self: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  border-radius: 50rem;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

export const AnnotationMobile = styled.div`
  @media (min-width: ${breakpointSm}) {
    display: none;
  }
`;

export const AnnotationTablet = styled.div`
  display: none;

  @media (min-width: ${breakpointSm}) {
    display: inherit;
  }
`;

export const StyledImage = styled(Image)<{
  disabled?: boolean;
}>`
  z-index: 3;
  width: 100%;
  height: 100%;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const ChildrenContainer = styled.div`
  display: flex;
  grid-area: children;
  flex-direction: row;
  align-items: center;
  text-decoration: none !important;
  text-decoration-color: transparent !important;
  text-decoration-line: none !important;
`;
