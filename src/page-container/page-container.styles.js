import styled, { css } from 'styled-components';
import { breakpointMd, spacingBase, spacingLg } from '../constants/layout';
import { pageMaxWidth, pageMaxWidthProse } from '../constants/misc';
import { WIDTHS } from './constants';

export const StyledPageContainer = styled.div`
  display: block;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  // overflow is needed to ensure elements animated
  // from outside the page don't affect page width
  overflow: hidden;

  ${({ bottomPadding }) =>
    bottomPadding &&
    css`
      padding-bottom: ${spacingLg};
    `}

  ${({ centred }) =>
    centred &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `}

  ${({ width }) => {
    switch (width) {
      case WIDTHS.prose:
        return css`
          max-width: ${pageMaxWidthProse};
          padding-right: ${spacingBase};
          padding-left: ${spacingBase};

          @media (min-width: ${breakpointMd}) {
            padding-right: ${spacingLg};
            padding-left: ${spacingLg};
          }
        `;
      case WIDTHS.fullWidth:
        return null;
      default:
        return css`
          max-width: ${pageMaxWidth};
          padding-right: ${spacingBase};
          padding-left: ${spacingBase};

          @media (min-width: ${breakpointMd}) {
            padding-right: ${spacingLg};
            padding-left: ${spacingLg};
          }
        `;
    }
  }}
`;
