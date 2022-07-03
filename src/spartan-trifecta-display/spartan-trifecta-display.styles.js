import styled from 'styled-components';
import { notBlack } from '../constants/colors';
import { metalColor2 } from '../spartan-medal/constants';
import SpartanTrifectaWedge from '../spartan-trifecta-wedge';

// Displays are 12.4cm in real life. 12.4 *1.8666666667 = 23.15
const displayWidth = '23.15rem';

const TRIFECTA_DISPLAY_DESIGN_SIZE = 124;
const TRIFECTA_WEDGE_DESIGN_SIZE = 100;

export const Wrapper = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: `0 0 ${TRIFECTA_DISPLAY_DESIGN_SIZE} ${TRIFECTA_DISPLAY_DESIGN_SIZE}`,
  width: TRIFECTA_DISPLAY_DESIGN_SIZE,
  height: TRIFECTA_DISPLAY_DESIGN_SIZE,
})`
  width: ${displayWidth};
  height: ${displayWidth};
`;

export const Background = styled.circle.attrs({
  cx: TRIFECTA_DISPLAY_DESIGN_SIZE / 2,
  cy: TRIFECTA_DISPLAY_DESIGN_SIZE / 2,
  r: TRIFECTA_DISPLAY_DESIGN_SIZE / 2,
})`
  fill: ${metalColor2};
`;

export const StyledSpartanTrifectaWedge = styled(SpartanTrifectaWedge).attrs({
  x: (TRIFECTA_DISPLAY_DESIGN_SIZE - TRIFECTA_WEDGE_DESIGN_SIZE) / 2,
  y: (TRIFECTA_DISPLAY_DESIGN_SIZE - TRIFECTA_WEDGE_DESIGN_SIZE) / 2,
})`
  clip-path: ${(props) => {
    switch (props.index) {
      case 0:
        return "path('M0 22.5L0 0H100V22.5L50 50L0 22.5Z')";
      case 1:
        return "path('M50 50L0 22.5V100H50V50Z')";
      default:
        return "path('M100 100V22.5L50 50V100H100Z')";
    }
  }};
`;

export const OuterTextGuidePath = styled.circle.attrs({
  id: 'outerTextLine',
  cx: TRIFECTA_DISPLAY_DESIGN_SIZE / 2,
  cy: TRIFECTA_DISPLAY_DESIGN_SIZE / 2,
  r: TRIFECTA_DISPLAY_DESIGN_SIZE / 2 - 9,
})`
  fill: none;
`;

export const OuterText = styled.text.attrs({ width: 500 })`
  font-size: 0.5rem;
  font-weight: bold;
  fill: ${(props) => props.color};
`;

export const OuterTextPath = styled.textPath.attrs({
  alignmentBaseline: 'center',
  xlinkHref: '#outerTextLine',
})`
  text-shadow: 1px 1px 2px white;
`;
