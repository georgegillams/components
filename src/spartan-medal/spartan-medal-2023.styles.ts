import styled from 'styled-components';
import { notBlack } from '../constants/colors';
import SpartanLogo from '../spartan-logo';
import TextLink from '../text-link';
import { metalColor0, metalColor2 } from './constants';

const LOGO_DESIGN_WIDTH = 27;

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

export const BackgroundInner = styled.path.attrs({
  d: 'M75 37.5C75 32.5754 74.03 27.6991 72.1455 23.1494C70.2609 18.5997 67.4987 14.4657 64.0165 10.9835C60.5343 7.5013 56.4003 4.73907 51.8506 2.85452C47.3009 0.969966 42.4246 -2.1526e-07 37.5 0C32.5754 2.1526e-07 27.6991 0.969967 23.1494 2.85452C18.5997 4.73907 14.4657 7.5013 10.9835 10.9835C7.5013 14.4657 4.73907 18.5997 2.85452 23.1494C0.969965 27.6991 -4.30519e-07 32.5754 0 37.5L37.5 37.5H75Z',
})`
  fill: ${metalColor0};
`;

export const BackgroundOuter = styled.circle.attrs({
  cx: 37.5,
  cy: 37.5,
  r: 33.5,
  strokeWidth: 8,
})`
  stroke: ${metalColor2};
  fill: none;
`;

export const Flash = styled.path.attrs({
  d: 'M59 44.1535C59.65 42.0508 60 39.8163 60 37.5C60 25.0736 49.9264 15 37.5 15C25.0736 15 15 25.0736 15 37.5C15 39.8163 15.35 42.0508 16 44.1535V68.2285C22.0876 72.4957 29.5013 75 37.5 75C45.4987 75 52.9124 72.4957 59 68.2285V44.1535Z',
})`
  fill: ${(props) => props.color};
`;

export const FlashEdging = styled.path.attrs({
  d: 'M15.5 67.8719V46H16.5V68.573C16.1627 68.3446 15.8293 68.1109 15.5 67.8719ZM17.5 69.2272V48H18.5V69.8373C18.1633 69.639 17.8299 69.4356 17.5 69.2272ZM19.5 70.4056V50H20.5V70.9343C20.1637 70.7629 19.8303 70.5867 19.5 70.4056ZM54.5 70.9343V50H55.5V70.4056C55.1697 70.5867 54.8363 70.7629 54.5 70.9343ZM56.5 69.8373V48H57.5V69.2272C57.1701 69.4356 56.8367 69.639 56.5 69.8373ZM58.5 68.573V46H59.5V67.8719C59.1707 68.1109 58.8373 68.3446 58.5 68.573Z',
})`
  fill: ${metalColor2};
`;

export const FlashRings1 = styled.circle.attrs({
  cx: 37.5,
  cy: 37.5,
  r: 22,
  strokeWidth: 3,
})`
  stroke: ${metalColor2};
  fill: none;
`;

export const FlashRings2 = styled.circle.attrs({
  cx: 37.5,
  cy: 37.5,
  r: 22,
  strokeWidth: 1,
})`
  stroke: ${metalColor0};
  fill: none;
`;

export const TopTextGuidePath = styled.path.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    id: 'textLine2023_1',
    d: isFirefox
      ? 'M5.74597 36.5927C5.74597 18.7932 21.0367 5.44353 37.5 5.44353C53.9633 5.44353 69.2541 18.7932 69.2541 36.5927'
      : 'M5 36.5C5 18.2143 20.6499 4.5 37.5 4.5C54.3501 4.5 70 18.2143 70 36.5',
  }),
)<{ isFirefox: boolean }>`
  fill: none;
`;

export const TopText = styled.text.attrs({ width: 500 })`
  font-size: 0.28rem;
  font-weight: bold;
  fill: ${metalColor0};
`;

export const TopTextPath = styled.textPath.attrs({
  alignmentBaseline: 'central',
  xlinkHref: '#textLine2023_1',
})`
  text-shadow: 1px 1px 2px ${notBlack};
`;

export const BottomDecorativeLine = styled.path.attrs({
  d: 'M70.9809 40.2105C70.4082 48.7275 66.6138 56.7068 60.3689 62.5264C54.124 68.346 45.8973 71.5693 37.3611 71.5408C28.825 71.5124 20.6199 68.2345 14.4139 62.3733C8.20794 56.5122 4.46673 48.5078 3.95081 39.9872',
})`
  fill: none;
  stroke: ${metalColor0};
  stroke-width: 1;
`;

export const InsideTextGuidePath = styled.circle.attrs<{ isFirefox: boolean }>(
  ({ isFirefox }) => ({
    id: 'textLine2023_2',
    cx: 37.5,
    cy: 37.5,
    r: isFirefox ? 16 : 17,
    transform: 'rotate(220 37.5 37.5)',
  }),
)<{ isFirefox: boolean }>`
  fill: none;
`;

export const InsideText = styled.text.attrs<{ isFirefox: boolean }>({
  width: 500,
})<{ isFirefox: boolean }>`
  font-size: 0.233rem;
  font-weight: bold;
  letter-spacing: ${({ isFirefox }) => (isFirefox ? 0 : '.13px')};
  fill: ${metalColor2};
`;

export const InsideTextPath = styled.textPath.attrs({
  startOffset: 0,
  alignmentBaseline: 'central',
  xlinkHref: '#textLine2023_2',
})`
  text-shadow: 0px 0px 3px white;
`;

// As we are nesting an SVG inside another SVG, width and height styles will be ignored.
export const StyledSpartanLogo = styled(SpartanLogo).attrs({
  x: (75 - LOGO_DESIGN_WIDTH) / 2,
  y: (75 - LOGO_DESIGN_WIDTH) / 2,
  height: LOGO_DESIGN_WIDTH,
  width: LOGO_DESIGN_WIDTH,
  color: metalColor2,
})``;

export const Year = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: ${metalColor2};
  font-size: 2.2rem;
  text-shadow: 0px 0px 3px white;
  height: 2.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  top: calc(${displayWidth} / 2);
`;

export const StravaLink = styled(TextLink).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``;
