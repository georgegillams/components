import styled from 'styled-components';
import { notBlack } from '../constants/colors';
import SpartanLogo from '../spartan-logo/spartan-logo';
import { metalColor1, metalColor2 } from '../spartan-medal/constants';

const LOGO_DESIGN_WIDTH = 55;

// Wedges are 10cm in real life. 10 *1.8666666667 = 18.6
// Wedge logos are 5cm in real life. 5 *1.8666666667 = 9.33
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
})<{
  backgroundColor?: string;
}>`
  fill: ${metalColor1};
  ${({ backgroundColor }) => backgroundColor && `fill: ${backgroundColor};`}
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

export const TopTextGuidePath = styled.path.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    d: isFirefox
      ? 'M13.5 49.75C13.5 29.1786 31.0761 13.75 50 13.75C68.9239 13.75 86.5 29.1786 86.5 49.75'
      : 'M11 49C11 27.2857 29.7799 11 50 11C70.2201 11 89 27.2857 89 49',
  }),
)<{ isFirefox: boolean }>`
  fill: none;
`;

export const TopText = styled.text.attrs({ width: 500 })`
  font-size: 0.65rem;
  font-weight: light;
  fill: ${(props) => props.color};
  letter-spacing: 0.25rem;
`;

export const TopTextPath = styled.textPath.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    startOffset: isFirefox ? 0.5 : 4,
    alignmentBaseline: 'central',
  }),
)<{ isFirefox: boolean }>`
  text-shadow: 0px 0px 3px white;
`;

export const BottomTextGuidePath = styled.path.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    d: isFirefox
      ? 'M5.5 48.75C5.5 71.5024 24.9509 93.6081 49.2514 93.7493C73.4158 93.8897 93.5 74.0305 93.5 49.7612'
      : 'M10 50C10 70.2244 27.6826 89.8738 49.774 89.9993C71.7417 90.1242 90 72.4715 90 50.8989',
  }),
)<{ isFirefox: boolean }>`
  fill: none;
`;

export const BottomText = styled.text.attrs({ width: 500 })`
  font-size: 0.65rem;
  font-weight: light;
  fill: white;
  letter-spacing: 0.1rem;
`;

export const BottomTextPath = styled.textPath.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    startOffset: isFirefox ? 23 : 17,
    alignmentBaseline: 'central',
  }),
)<{ isFirefox: boolean }>`
  text-shadow: 0px 0px 3px white;
`;

// As we are nesting an SVG inside another SVG, width and height styles will be ignored.
export const StyledSpartanLogo = styled(SpartanLogo).attrs<{
  fill?: boolean;
}>(({ fill }) => {
  if (fill) {
    return {
      x: 0,
      y: 0,
      height: 100,
      width: 100,
    };
  }
  return {
    x: (100 - LOGO_DESIGN_WIDTH) / 2,
    y: (100 - LOGO_DESIGN_WIDTH) / 2,
    height: LOGO_DESIGN_WIDTH,
    width: LOGO_DESIGN_WIDTH,
  };
})<{
  fill?: boolean;
}>``;
