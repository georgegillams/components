import styled, { css } from 'styled-components';

export const StyledTable = styled.table.attrs({
  cellSpacing: 4,
  cellPadding: 4,
})`
  border-collapse: collapse;
`;

export const StyledHead = styled.thead`
  font-weight: bold;
  text-align: center;
`;

export const StyledBody = styled.tbody``;

export const StyledRow = styled.tr``;

export const StyledCell = styled.th`
     padding: 0.4rem;
     border: 1px solid #1e1e1e;
     font-weight: inherit;
     text-align: inherit;

     @media (prefers-color-scheme: dark) {
       border-color: gray;
     }
   }
`;
