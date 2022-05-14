import styled from 'styled-components';
import { Section as GGSection } from '../Section';

export const Section = styled(GGSection)`
  background-color: #ed75ff;

  @media (prefers-color-scheme: dark) {
    background-color: #740086;
  }
`;
