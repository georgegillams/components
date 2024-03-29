import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
 ${normalize}

 * {
   box-sizing: border-box;
 }
 `;

export const GlobalWrapper = styled.div`
  color: $not-black;
  font-family: 'Quattrocento Sans', -apple-system, BlinkMacSystemFont, Roboto,
    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    Arial, sans-serif;

  @media (prefers-color-scheme: dark) {
    color: $not-black-invert;
  }
`;
