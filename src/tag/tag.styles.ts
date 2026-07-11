import styled, { css } from 'styled-components';
import { TAG_TYPES } from './constants';
import { borderRadiusXs } from '../constants/primitive/layout';
import { durationSm } from '../constants/primitive/timings';
import { fontSizeSm } from '../constants/primitive/font';
import {
  tagEventsBackground,
  tagForeground,
  tagPhotographyBackground,
  tagSecurityBackground,
  tagSecurityColor,
  tagTechBackground,
  tagTechColor,
  tagTravelBackground,
} from '../constants/semantic/colors';

export const Wrapper = styled.div``;

export const StyledTag = styled.span<{
  type: TAG_TYPES;
}>`
  position: relative;
  top: 0.15rem;
  height: 1rem;
  padding: 0.17rem 0.4rem 0.27rem;
  transition: all ${durationSm};
  border: none;
  border-radius: ${borderRadiusXs};
  color: ${tagForeground};
  font-size: ${fontSizeSm};
  text-decoration: none;
  text-decoration-color: transparent;
  text-decoration-line: none;
  ${({ type }) => {
    switch (type) {
      case TAG_TYPES.tech:
        return css`
          background-color: ${tagTechBackground};
          color: ${tagTechColor};
        `;
      case TAG_TYPES.events:
        return css`
          background-color: ${tagEventsBackground};
        `;
      case TAG_TYPES.travel:
        return css`
          background-color: ${tagTravelBackground};
        `;
      case TAG_TYPES.security:
        return css`
          background-color: ${tagSecurityBackground};
          color: ${tagSecurityColor};
        `;
      case TAG_TYPES.photography:
        return css`
          background-color: ${tagPhotographyBackground};
        `;
    }
  }}
`;
