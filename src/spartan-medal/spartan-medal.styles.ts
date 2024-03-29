import styled from 'styled-components';
import { notBlack } from '../constants/colors';
import SpartanLogo from '../spartan-logo';
import TextLink from '../text-link';
import { metalColor1, metalColor2 } from './constants';

const LOGO_DESIGN_WIDTH = 44;

// Wedges are 7.5cm in real life. 7.5 *1.8666666667 = 14
// Medal logos are 4cm in real life. 4 *1.8666666667 = 7.5
const displayWidth = `14rem`;

export const Wrapper = styled.div`
  position: relative;
  width: ${displayWidth};
  height: ${displayWidth};
`;

export const WrapperSvg = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  width: '75',
  height: '75',
})`
  width: ${displayWidth};
  height: ${displayWidth};
`;

export const BackgroundOuter = styled.circle.attrs({
  cx: 37.5,
  cy: 37.5,
  r: 37.5,
})`
  fill: ${metalColor1};
`;

export const BackgroundInner = styled.circle.attrs({
  cx: 37.5,
  cy: 37.5,
  r: 25.5,
})`
  fill: ${metalColor2};
`;

export const Flash = styled.path.attrs({
  d: 'M37.5 75C47.4456 75 56.9839 71.0491 64.0165 64.0165C71.0491 56.9839 75 47.4456 75 37.5C75 27.5544 71.0491 18.0161 64.0165 10.9835C56.9839 3.95088 47.4456 -1.186e-07 37.5 0V8.59567C45.1659 8.59567 52.5178 11.6409 57.9384 17.0616C63.3591 22.4822 66.4043 29.8341 66.4043 37.5C66.4043 45.1659 63.3591 52.5178 57.9384 57.9384C52.5178 63.3591 45.1659 66.4043 37.5 66.4043V75Z',
})`
  fill: ${(props) => props.color};
`;

export const RightTextGuidePath = styled.path.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    id: 'textLine1',
    d: isFirefox
      ? 'M38 6C54.7705 6 69 20.7339 69 36.9919C69 53.7581 55.7869 69 38 69'
      : 'M39 5C55.7705 5 70 20.2016 70 36.9758C70 54.2742 56.7869 70 39 70',
  }),
)<{ isFirefox: boolean }>`
  fill: none;
`;

export const RightText = styled.text.attrs({ width: 500 })`
  font-size: 0.3rem;
  font-weight: bold;
  fill: ${(props) => props.color};
`;

export const RightTextPath = styled.textPath.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    startOffset: isFirefox ? 15 : 17,
    alignmentBaseline: 'central',
    xlinkHref: '#textLine1',
  }),
)<{ isFirefox: boolean }>`
  text-shadow: 0px 0px 3px white;
`;

export const LeftTextGuidePath = styled.path.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    id: 'textLine2',
    d: isFirefox
      ? 'M37 66C21.8525 66 8.99999 52.6694 9 37.9597C9 22.7903 20.9344 9 37 9'
      : 'M36 69C19.7705 69 6 54.2661 6 38.0081C6 21.2419 18.7869 6 36 6',
  }),
)<{ isFirefox: boolean }>`
  fill: none;
`;

export const LeftText = styled.text.attrs({ width: 500 })`
  font-size: 0.5rem;
  font-weight: bold;
  fill: ${metalColor2};
`;

export const LeftTextPath = styled.textPath.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    startOffset: isFirefox ? 16 : 18,
    alignmentBaseline: 'central',
    xlinkHref: '#textLine2',
  }),
)<{ isFirefox: boolean }>`
  text-shadow: 1px 1px 2px ${notBlack};
`;

// As we are nesting an SVG inside another SVG, width and height styles will be ignored.
export const StyledSpartanLogo = styled(SpartanLogo).attrs({
  x: (75 - LOGO_DESIGN_WIDTH) / 2,
  y: (75 - LOGO_DESIGN_WIDTH) / 2,
  height: LOGO_DESIGN_WIDTH,
  width: LOGO_DESIGN_WIDTH,
})``;

export const LinkContainer = styled.div`
  position: absolute;
  right: calc(${displayWidth} / 2);
  bottom: 0;
`;

export const StravaLink = styled(TextLink).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``;
