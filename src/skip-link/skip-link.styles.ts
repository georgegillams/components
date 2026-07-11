import styled from 'styled-components';
import { spacingSm } from '../constants/primitive/layout';
import { durationSm } from '../constants/primitive/timings';
import {
  skipLinkBackground,
  skipLinkForeground,
} from '../constants/semantic/colors';
import textLink from '../text-link';

export const Wrapper = styled.div`
  background-color: ${skipLinkBackground};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all ${durationSm} ease-in-out;
  // We want the skiplink to remain visible for a short period of time after it is blurred so that
  // a user tabbing quickly has a chance to see that it appeared
  transition-delay: 0.2s;

  opacity: 0;
  height: 0;
  padding: 0;

  &:focus-within,
  &:focus {
    padding: calc(2 * ${spacingSm});
    transition: none;
    opacity: 1;
    transition-delay: 0;
    height: 3rem;
  }
`;

export const Link = styled(textLink)`
  color: ${skipLinkForeground};
  font-weight: bold;
  text-decoration: none;
`;
