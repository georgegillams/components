import styled, { css } from 'styled-components';
import SpartanLogo from '../spartan-logo/spartan-logo';
import SpartanTrifectaWedge from '../spartan-trifecta-wedge';

// Displays are 12cm in real life. 12 *1.8666666667 = 22.4
const displayWidth = '22.4rem';

export const Wrapper = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 120 120',
  width: '120',
  height: '120',
})`
  width: ${displayWidth};
  height: ${displayWidth};
`;

export const Background = styled.circle.attrs({
  cy: 60,
  cx: 60,
  r: 60,
})`
  fill: #d9d9d9;
`;

export const StyledSpartanTrifectaWedge = styled(SpartanTrifectaWedge).attrs({
  x: (120 - 100) / 2,
  y: (120 - 100) / 2,
})`
  clip-path: ${(props) => {
    switch (props.index) {
      case 0:
        return "path('M0 22.5L0 0H100V22.5L50 50L0 22.5Z')";
      case 1:
        return "path('M100 100V22.5L50 50V100H100Z')";
      default:
        return "path('M50 50L0 22.5V100H50V50Z')";
    }
  }};
`;
