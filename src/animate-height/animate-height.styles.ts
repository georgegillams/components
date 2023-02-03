import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
  isExpanded: boolean;
}>`
  margin: 0;
  padding: 0;
  transition: height 0.2s ease-in-out, margin 0.2s ease-in-out,
    padding 0.2s ease-in-out;
  overflow: hidden;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      margin: -1rem;
      padding: 1rem;
    `}
`;
