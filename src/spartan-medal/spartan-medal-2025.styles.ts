import styled, { css } from 'styled-components';
import { notBlack } from '../constants/colors';
import SpartanLogo from '../spartan-logo';
import TextLink from '../text-link';
import { metalColor0, metalColor1, metalColor2 } from './constants';

const LOGO_DESIGN_WIDTH = 41;

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
  viewBox: '0 0 75 76',
  width: '75',
  height: '76',
})`
  width: ${displayWidth};
  height: ${displayWidth};
`;

export const Background = styled.path.attrs({
  d: 'M37.498 1.52588e-05C54.3462 4.03635e-05 68.5988 11.1111 73.3291 26.4053C73.0715 26.7841 72.8135 27.1191 72.6602 27.2725C72.2706 27.6621 70.55 28.4087 69.7383 28.7334C70.063 29.8698 70.7119 32.9222 70.7119 36.0391C70.7119 39.1559 70.3247 42.3637 70 43.5C70.974 43.8247 72.5647 44.6445 73.1475 45.292C73.4427 45.62 73.7311 45.9107 73.9893 46.1651C70.0783 62.6978 55.226 75 37.498 75C19.6432 75 4.70461 62.5212 0.923828 45.8096C1.07622 45.6671 1.25324 45.4977 1.45898 45.292C2.07506 44.676 3.526 43.6684 4.5 43.3438C4.17537 42.2071 3.89454 39.1556 3.89453 36.0391C3.89453 32.9222 4.54349 29.8698 4.86816 28.7334C4.05642 28.4087 2.33588 27.6621 1.94629 27.2725C1.84835 27.1745 1.70702 27.003 1.55078 26.793C6.15872 11.2994 20.508 1.52588e-05 37.498 1.52588e-05Z',
})`
  fill: ${metalColor1};
`;

export const BackgroundRing = styled.circle.attrs({
  cx: 37.5,
  cy: 37.5,
  r: 31,
  strokeWidth: 1,
})`
  stroke: ${metalColor2};
  fill: none;
`;

export const Tab = styled.path.attrs({
  d: 'M38.0855 14.8076C50.3515 15.1184 60.1997 25.1591 60.1997 37.5C60.1997 44.9186 56.64 51.5046 51.1372 55.6465C50.9856 55.8474 50.8301 56.0581 50.6734 56.2725C49.8829 57.3538 49.0996 58.5097 48.7359 59.1777C48.6713 59.2965 48.591 59.5127 48.5015 59.8311C48.4132 60.1454 48.3192 60.5471 48.2222 61.0283C48.0333 61.9656 47.8472 63.1301 47.6743 64.3701C47.3289 66.8491 47.0394 69.5988 46.8784 71.3721L46.8745 71.4151L46.8726 71.4336L46.8677 71.4512L46.856 71.4912C46.7641 71.8288 46.5796 72.3616 46.313 72.9072C46.0508 73.444 45.6819 74.0532 45.2007 74.4951H45.1997C44.7632 74.8956 44.157 75.0294 43.6304 75.0928C43.0902 75.1577 42.443 75.1656 41.8452 75.1895H41.8443C41.787 75.1914 41.159 75.1941 40.3169 75.1963L37.4986 75.1983C36.5825 75.2002 35.5224 75.1985 34.6783 75.1963L33.1538 75.1895C32.5561 75.1656 31.9089 75.1578 31.3687 75.0928C30.8421 75.0294 30.2349 74.896 29.7984 74.4951C29.3173 74.0532 28.9483 73.444 28.6861 72.9072C28.4196 72.3616 28.234 71.8297 28.1421 71.4922V71.4912L28.1314 71.4512L28.1265 71.4336L28.1245 71.4151L28.1206 71.3721L27.9771 69.8779C27.8116 68.2405 27.5838 66.2293 27.3247 64.3701C27.1519 63.1301 26.9658 61.9656 26.7769 61.0283C26.6799 60.5471 26.5859 60.1454 26.4976 59.8311C26.4081 59.5127 26.3278 59.2964 26.2632 59.1777C25.8994 58.5096 25.1161 57.3538 24.3257 56.2725C24.1684 56.0573 24.0113 55.8464 23.8589 55.6445C18.3581 51.5025 14.7993 44.9171 14.7993 37.5C14.7993 24.9633 24.9629 14.8001 37.4995 14.7998L38.0855 14.8076Z',
})`
  fill: ${metalColor2};
  stroke: ${metalColor0};
`;

export const TopTextGuidePath = styled.path.attrs({
  id: 'textLine2023_1',
  d: 'M2 38.5C2 19.0714 19.0945 4.5 37.5 4.5C55.9055 4.5 73 19.0714 73 38.5',
})`
  fill: none;
`;

export const TopText = styled.text.attrs({ width: 500 })<{
  isFirefox: boolean;
}>`
  font-size: 0.28rem;
  font-weight: bold;
  fill: ${metalColor0};
  ${(props) =>
    !props.isFirefox &&
    css`
      transform: translateY(-1px);
    `}
`;

export const TopTextPath = styled.textPath.attrs({
  alignmentBaseline: 'central',
  xlinkHref: '#textLine2023_1',
})`
  text-shadow: 1px 1px 2px ${notBlack};
`;

export const BottomText = styled.text.attrs({ width: 500 })<{
  isFirefox: boolean;
}>`
  font-size: 0.18rem;
  font-weight: bold;
  fill: ${metalColor0};
  ${(props) =>
    !props.isFirefox &&
    css`
      transform: translateY(-0.5px);
    `}
`;

export const BottomLeftTextGuidePath = styled.path.attrs({
  id: 'textLine2023_2',
  d: 'M4 45C4 45 6.5 56 13 62.5C18.1222 67.6222 27 70.5 27 70.5',
})`
  fill: none;
`;

export const BottomLeftTextPath = styled.textPath.attrs({
  startOffset: 10,
  alignmentBaseline: 'central',
  xlinkHref: '#textLine2023_2',
})`
  text-shadow: 1px 1px 2px ${notBlack};
`;

export const BottomRightTextGuidePath = styled.path.attrs({
  id: 'textLine2023_3',
  d: 'M47.5 70.5C50 69.8333 58.4929 66.6085 64 60C69 54 71 45 71 45',
})`
  fill: none;
`;

export const BottomRightTextPath = styled.textPath.attrs({
  startOffset: 7,
  alignmentBaseline: 'central',
  xlinkHref: '#textLine2023_3',
})`
  text-shadow: 1px 1px 2px ${notBlack};
`;

export const LogoBackground = styled.circle.attrs({
  cx: 37.5,
  cy: 37.5,
  r: 20.41,
})`
  fill: ${(props) => props.color};
`;

export const BrokenPiecesBackground = styled.path.attrs({
  d: 'M4 36C4 39.1361 4.6 43.5 4.6 43.5L7.00001 43L7.50001 45.5L24 61.5H56.5L61.5 58L68 42L70 43.1849C70 43.1849 70.7276 38.9547 70.7 36C70.6742 33.2387 69.7 29 69.7 29L67.5 30L65 25.5L44 9L29 8L21.5 11L15.5 16.5L12 24.5L10 31L4.90001 29C4.90001 29 4 32 4 36Z',
})`
  fill: ${(props) => props.color};
`;

export const BrokenPieces = styled.path.attrs({
  d: 'M37.5 7.00002C52.171 7.00002 64.4202 17.3589 67.3379 31.1611L67 31.5L65.5 26.5L64 28V30L62 28L58.5 31.5L59.5 37.5L67.7783 41.1787C67.2472 45.5967 65.7719 49.7235 63.5596 53.3526L62.5 53L59.5 51V53L56.5 58L54 57.5L54.5 59L54 59.5L56.8115 61.1065C51.5522 65.414 44.8285 68 37.5 68C23.1422 68 11.1036 58.0785 7.86133 44.7178L10 46.5L14 41L12.5 39L16 37.5L16.5 35L7.77539 30.6377C9.4733 23.2531 13.8516 16.8918 19.832 12.6348L24.5 19V16.5L26 14L24.0576 10.1162C28.1131 8.12168 32.6754 7.00002 37.5 7.00002ZM37.5 17C26.1782 17 17 26.1782 17 37.5C17 48.8219 26.1782 58 37.5 58C48.8218 58 58 48.8219 58 37.5C58 26.1782 48.8218 17 37.5 17Z',
})`
  fill: ${metalColor1};
  stroke: ${metalColor0};
  stroke-width: 0.4;
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
  bottom: 0.3125rem;
  width: 100%;
  text-align: center;
  color: ${metalColor0};
  font-size: 2.2rem;
  text-shadow: 0px 0px 3px white;
  height: 2.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate3d(1, 0, 0, 45deg);

  /* target second element: */
  & > span:nth-child(2) {
    margin-top: -0.6rem;
  }
`;

export const LinkContainer = styled.div`
  position: absolute;
  left: calc(${displayWidth} / 2);
  top: 1.4rem;
  transform: translateX(-50%);
`;

export const StravaLink = styled(TextLink).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``;
