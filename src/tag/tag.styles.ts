import styled, { css } from 'styled-components';
import { TAG_COLOR_MAPPINGS, TAG_TYPES } from './constants';

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
  border-radius: 0.2rem;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  text-decoration-color: transparent;
  text-decoration-line: none;

  ${({ type }) => {
    const tagColorMapping = TAG_COLOR_MAPPINGS[type];
    return css`
      background-color: ${tagColorMapping.background};
      color: ${tagColorMapping.foreground};
    `;
  }}
`;
