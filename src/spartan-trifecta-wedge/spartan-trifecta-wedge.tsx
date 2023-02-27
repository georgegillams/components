import React from 'react';
import PropTypes from 'prop-types';

import { EVENT_TYPE, TYPE_COLORS } from '../spartan-medal';
import EventPatch from '../event-patch';
import {
  BackgroundInner,
  BackgroundOuter,
  BottomText,
  BottomTextGuidePath,
  BottomTextPath,
  Flash,
  InnerDecoration,
  StyledSpartanLogo,
  TopText,
  TopTextGuidePath,
  TopTextPath,
  Wrapper,
} from './spartan-trifecta-wedge.styles';

export interface SpartanTrifectaWedgeProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {
  type: typeof EVENT_TYPE[keyof typeof EVENT_TYPE];
  year?: string;
  wedgePosition?: string;
}

const SpartanTrifectaWedge = (props: SpartanTrifectaWedgeProps) => {
  const { type, year, wedgePosition = '', ...rest } = props;

  const { foreground, background } = TYPE_COLORS[type];

  if (type === EVENT_TYPE.obstacleSpecialistWorkshop) {
    return (
      <Wrapper {...rest}>
        <BackgroundOuter backgroundColor={background} />
        <StyledSpartanLogo color={foreground} fill />
      </Wrapper>
    );
  }

  return (
    <Wrapper {...rest}>
      <BackgroundOuter />
      <BackgroundInner />
      <InnerDecoration />
      <Flash color={background} />
      <TopTextGuidePath id={`textLineTop${wedgePosition}`} />
      <TopText color={foreground}>
        <TopTextPath xlinkHref={`#textLineTop${wedgePosition}`}>
          SPARTAN {year}
        </TopTextPath>
      </TopText>

      <BottomTextGuidePath id={`textLineBottom${wedgePosition}`} />
      <BottomText color={foreground}>
        <BottomTextPath xlinkHref={`#textLineBottom${wedgePosition}`}>
          TRIFECTA TRIBE
        </BottomTextPath>
      </BottomText>
      <StyledSpartanLogo color={background} />
    </Wrapper>
  );
};

export default SpartanTrifectaWedge;
