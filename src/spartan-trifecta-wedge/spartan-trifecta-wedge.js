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

const SpartanTrifectaWedge = (props) => {
  const { type, year, ...rest } = props;

  const { foreground, background } = TYPE_COLORS[type];

  return (
    <Wrapper {...rest}>
      <BackgroundOuter />
      <BackgroundInner />
      <InnerDecoration />
      <Flash color={background} />
      <TopTextGuidePath />
      <TopText color={foreground}>
        <TopTextPath>SPARTAN {year}</TopTextPath>
      </TopText>

      <BottomTextGuidePath />
      <BottomText color={foreground}>
        <BottomTextPath>TRIFECTA TRIBE</BottomTextPath>
      </BottomText>
      <StyledSpartanLogo color={background} />
    </Wrapper>
  );
};

SpartanTrifectaWedge.propTypes = {
  type: PropTypes.oneOf(Object.values(EVENT_TYPE)).isRequired,
  year: PropTypes.string.isRequired,
};

export default SpartanTrifectaWedge;
