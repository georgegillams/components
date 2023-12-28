import styled, { css } from 'styled-components';
import { CornerRadiuses } from './types';
import { TECHNOLOGY } from './constants';

export const Container = styled.div<{
  maskId?: string;
  cornerRadiuses: CornerRadiuses;
  technology: TECHNOLOGY;
}>`
  overflow: hidden;

  ${({ cornerRadiuses, maskId, technology }) =>
    css`
      // If a maskID is provided, we set the clip path.
      // If not, we set the border-radiuses as a fall-back
      ${maskId
        ? css`
            clip-path: url(#${maskId});
          `
        : css`
            border-radius: ${cornerRadiuses.topLeft}px
              ${cornerRadiuses.topRight}px ${cornerRadiuses.bottomRight}px
              ${cornerRadiuses.bottomLeft}px;
          `}

      // If the browser has JS and Houdini support,
      // we unset border-radiuses and mask-path and just use Houdini
      ${technology !== TECHNOLOGY.svgOnly &&
      css`
          @supports (mask-image: paint(smooth-corners)) {
            .js & {
              border-radius: 0;
            }
            clip-path: unset;
            mask-image: paint(smooth-corners);
            --smooth-corners: ${cornerRadiuses.topLeft}
              ${cornerRadiuses.topRight} ${cornerRadiuses.bottomRight}
              ${cornerRadiuses.bottomLeft};
          }
        }
      `}
    `};

  // Note that .js or .no - js should only be used non-conditionally,
  // as doing so will affect all instances of the className, regardless of props
  .no-js & {
    clip-path: unset;
    mask-image: unset;
  }
`;

export const MaskSvg = styled.svg<{
  technology: TECHNOLOGY;
}>`
  position: absolute;

  ${({ technology }) =>
    technology !== TECHNOLOGY.svgOnly &&
    css`
        @supports (mask-image: paint(smooth-corners)) {
          display: none;
        }
      }
    `}
`;
