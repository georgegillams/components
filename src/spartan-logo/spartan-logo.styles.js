import styled, { css } from 'styled-components';
import { notBlack } from '../constants/colors';

export const Wrapper = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 200 200',
  width: '44',
  height: '44',
})`
  width: 14rem;
  height: 14rem;
  fill: none;
  filter: drop-shadow(0px 0px 0.4px ${notBlack});
`;
