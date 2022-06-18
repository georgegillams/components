import styled, { css } from 'styled-components';

export const Icon = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: '18',
  height: '18',
})`
  width: 1.25rem;
  height: 1.25rem;

  ${({ large }) =>
    large &&
    css`
      width: 2rem;
      height: 2rem;
    `}
`;
