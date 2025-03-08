import styled, { css, keyframes } from 'styled-components';
import { SKELETON_STYLES } from './constants';
import { spacingBase } from '../constants/layout';
import {
  sectionFontSize,
  sectionMarginTop,
  subsectionFontSize,
  subsectionMarginTop,
} from '../constants/font';

export const Outer = styled.div<{
  skeletonStyle?: SKELETON_STYLES;
}>`
  position: relative;
  width: 100%;
  border-radius: 0.25rem;
  background-color: rgb(238, 238, 238);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: rgb(17, 17, 17);
  }

  ${({ skeletonStyle }) => {
    switch (skeletonStyle) {
      case SKELETON_STYLES.button:
        return css`
          width: 12rem;
          height: 2.6rem;
          margin-bottom: 1.2rem;
          border-radius: 0.75rem;
          overflow: hidden;
        `;
      case SKELETON_STYLES.buttonSmall:
        return css`
          min-width: 5rem;
          height: 1.5rem;
          border-radius: 0.5rem;
          overflow: hidden;
        `;
      case SKELETON_STYLES.card:
        return css`
          width: 100%;
          height: 10rem;
          margin-bottom: 1.2rem;
          border-radius: 0.75rem;
        `;
      case SKELETON_STYLES.cardCompact:
        return css`
          width: 100%;
          max-width: 25rem;
          height: 10rem;
          margin-bottom: 1.2rem;
          border-radius: 0.75rem;
        `;
      case SKELETON_STYLES.checkbox:
        return css`
          width: 10rem;
          height: 1.8rem;
          margin-bottom: 1.2rem;
        `;
      case SKELETON_STYLES.formHint:
        return css`
          width: 20rem;
          height: 0.8rem;
          margin-bottom: 0.375rem;
        `;
      case SKELETON_STYLES.formLabel:
        return css`
          width: 10rem;
          height: 1.125rem;
          margin-bottom: 0.375rem;
        `;
      case SKELETON_STYLES.infoCell:
        return css`
          width: 100%;
          height: 14rem;
          border-radius: 0;
        `;
      case SKELETON_STYLES.input:
        return css`
          width: 100%;
          height: 1.8rem;
          margin-bottom: 1.2rem;
        `;
      case SKELETON_STYLES.notification:
        return css`
          width: 100%;
          height: 3rem;
        `;
      case SKELETON_STYLES.progress:
        return css`
          width: 100%;
          height: 1rem;
          margin-bottom: ${spacingBase};
          border-radius: 10rem;
        `;
      case SKELETON_STYLES.progressSmall:
        return css`
          width: 100%;
          height: 0.5rem;
          margin-bottom: ${spacingBase};
          border-radius: 10rem;
        `;
      case SKELETON_STYLES.section:
        return css`
          width: 8rem;
          height: ${sectionFontSize};
          margin-top: ${sectionMarginTop};
        `;
      case SKELETON_STYLES.subsection:
        return css`
          width: 8rem;
          height: ${subsectionFontSize};
          margin-top: ${subsectionMarginTop};
        `;
      case SKELETON_STYLES.textLink:
        return css`
          height: 0.5rem;
          margin-bottom: ${spacingBase};
          border-radius: 10rem;
        `;
      default:
        return null;
    }
  }}
`;

const ggShim = keyframes`
    from {
      left: -13rem;
    }
    to {
      left: calc(100vw + 13rem);
    }
`;

export const Shimmer = styled.div`
  position: absolute;
  top: 0;
  width: 13rem;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    rgb(238, 238, 238),
    rgb(245, 245, 245),
    rgb(238, 238, 238)
  );
  background-repeat: no-repeat;
  background-size: 12.5rem 100%;
  animation: ${ggShim} 3.5s ease-in-out infinite;

  @media (prefers-color-scheme: dark) {
    background-image: linear-gradient(
      90deg,
      rgb(17, 17, 17),
      rgb(50, 50, 50),
      rgb(17, 17, 17)
    );
  }
`;
