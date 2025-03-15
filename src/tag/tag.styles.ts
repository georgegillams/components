import styled, { css } from 'styled-components';
import { TAG_TYPES } from './constants';
import { borderRadiusXs } from '../constants/layout';

export const Wrapper = styled.div``;

export const StyledTag = styled.span<{
  type: TAG_TYPES;
}>`
  position: relative;
  top: 0.15rem;
  height: 1rem;
  padding: 0.17rem 0.4rem 0.27rem;
  transition: all 0.4s;
  border: none;
  border-radius: ${borderRadiusXs};
  color: white;
  font-size: 1rem;
  text-decoration: none;
  text-decoration-color: transparent;
  text-decoration-line: none;
  ${({ type }) => {
    switch (type) {
      case TAG_TYPES.tech:
        return css`
          background-color: #fbc02d;
          color: #3c4451;
        `;
      case TAG_TYPES.events:
        return css`
          background-color: #6a1b9a;
        `;
      case TAG_TYPES.travel:
        return css`
          background-color: #01579b;
        `;
      case TAG_TYPES.security:
        return css`
          background-color: #44aeff;
          color: #3c4451;
        `;
      case TAG_TYPES.photography:
        return css`
          background-color: #d84315;
        `;
    }
  }}
`;
