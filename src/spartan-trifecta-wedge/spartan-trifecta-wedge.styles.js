import styled from 'styled-components';
import { notBlack } from '../constants/colors';
import SpartanLogo from '../spartan-logo/spartan-logo';
import { metalColor1, metalColor2 } from '../spartan-medal/constants';

// Wedges are 10cm in real life. 10 *1.8666666667 = 18.6
const displayWidth = '18.6rem';

export const Wrapper = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 100 100',
  width: '100',
  height: '100',
})`
  width: ${displayWidth};
  height: ${displayWidth};
`;

export const BackgroundOuter = styled.circle.attrs({
  cx: 50,
  cy: 50,
  r: 50,
})`
  fill: ${metalColor1};
`;

export const BackgroundInner = styled.circle.attrs({
  cx: 50,
  cy: 50,
  r: 31.5,
})`
  fill: ${metalColor2};
`;

export const InnerDecoration = styled.circle.attrs({
  cx: 50,
  cy: 50,
  r: 31.5,
})`
  stroke: ${notBlack};
  fill: none;
`;

export const Flash = styled.path.attrs({
  d: 'M6 50C6 74.3005 25.6995 94 50 94C74.3005 94 94 74.3005 94 50C94 25.6995 74.3005 6 50 6C25.6995 6 6 25.6995 6 50ZM85.485 50C85.485 69.5978 69.5978 85.485 50 85.485C30.4022 85.485 14.515 69.5978 14.515 50C14.515 30.4022 30.4022 14.515 50 14.515C69.5978 14.515 85.485 30.4022 85.485 50Z',
})`
  fill: ${(props) => props.color};
`;

export const TopTextGuidePath = styled.path.attrs({
  d: 'M14.5 49.5C14.5 29.5 31.5945 14.5 50 14.5C68.4055 14.5 85.5 29.5 85.5 49.5',
})`
  fill: none;
`;

export const TopText = styled.text.attrs({ width: 500 })`
  font-size: 0.77rem;
  font-weight: light;
  fill: ${(props) => props.color};
  letter-spacing: 0.16rem;
`;

export const TopTextPath = styled.textPath.attrs({
  startOffset: 1,
  alignmentBaseline: 'center',
})``;

export const BottomTextGuidePath = styled.path.attrs({
  d: 'M5.5 49.5C5.5 72 25.0614 93.8604 49.5 94C73.8017 94.1389 94 74.5 94 50.5',
})`
  fill: none;
`;

export const BottomText = styled.text.attrs({ width: 500 })`
  font-size: 0.77rem;
  font-weight: light;
  fill: white;
`;

export const BottomTextPath = styled.textPath.attrs({
  startOffset: 26,
  alignmentBaseline: 'center',
})``;

export const StyledSpartanLogo = styled(SpartanLogo).attrs({
  x: (100 - 44) / 2,
  y: (100 - 44) / 2,
})``;
