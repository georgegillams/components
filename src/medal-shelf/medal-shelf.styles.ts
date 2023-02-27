import styled from 'styled-components';
import { spacingLg } from '../constants/layout';

const spacing = spacingLg;

export const Shelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -${spacing};
  margin-left: -${spacing};

  > * {
    margin-top: ${spacing};
    margin-left: ${spacing};
  }
`;
