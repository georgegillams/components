import styled, { css } from 'styled-components';
import Text from '../text';

export const DateText = styled(Text)<{
  padding?: boolean;
}>`
  font-style: italic;

  ${({ padding }) =>
    padding &&
    css`
      padding-bottom: 0.5rem;
    `}
`;
