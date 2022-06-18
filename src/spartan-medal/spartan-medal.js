import React from 'react';
import PropTypes from 'prop-types';

import {
  EVENT_TYPE,
  ROMAN_NUMERALS,
  TYPE_COLORS,
  TYPE_DESCRIPTION,
  TYPE_DISTANCE,
  TYPE_OBSTACLES,
} from './constants';
import {
  Wrapper,
  BackgroundOuter,
  BackgroundInner,
  Flash,
  RightTextGuidePath,
  RightTextPath,
  RightText,
  LeftTextGuidePath,
  LeftTextPath,
  LeftText,
} from './spartan-medal.styles';
import SpartanLogo from '../spartan-logo/spartan-logo';

const SpartanMedal = (props) => {
  const { type, year, ...rest } = props;

  const { foreground, background } = TYPE_COLORS[type];
  const title = TYPE_DESCRIPTION[type];
  const distance = TYPE_DISTANCE[type];
  const obstacles = TYPE_OBSTACLES[type];
  const yearRoman = ROMAN_NUMERALS[year];

  const logo = <circle cx="37.5" cy="37.5" r="22" />;

  return (
    <Wrapper>
      <BackgroundOuter />
      <BackgroundInner />
      <Flash color={background} />

      <RightTextGuidePath />
      <RightText color={foreground}>
        <RightTextPath>
          {distance} KILOMETERS • {obstacles} OBSTACLES
        </RightTextPath>
      </RightText>

      <LeftTextGuidePath />
      <LeftText>
        <LeftTextPath>SPRINT {yearRoman}</LeftTextPath>
      </LeftText>

      <SpartanLogo />
    </Wrapper>
  );
};

SpartanMedal.propTypes = {
  type: PropTypes.oneOf(Object.values(EVENT_TYPE)).isRequired,
  year: PropTypes.string.isRequired,
  stravaLink: PropTypes.string,
};

SpartanMedal.defaultProps = {
  stravaLink: null,
};

export default SpartanMedal;
