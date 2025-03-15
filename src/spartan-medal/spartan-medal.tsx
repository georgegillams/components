import React, { useState, useEffect } from 'react';

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
  StyledSpartanLogo,
  LinkContainer,
  StravaLink,
  WrapperSvg,
} from './spartan-medal.styles';
import { StyledThemeProvider } from '../styled-theming';

import StravaIcon from '../icon/strava';

export interface SpartanMedalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  type: Exclude<
    typeof EVENT_TYPE[keyof typeof EVENT_TYPE],
    typeof EVENT_TYPE.obstacleSpecialistWorkshop
  >;
  year: keyof typeof ROMAN_NUMERALS;
  stravaLink?: string;
}

const SpartanMedal = (props: SpartanMedalProps) => {
  const { type, year, stravaLink, ...rest } = props;

  const { foreground, background } = TYPE_COLORS[type];
  const title = TYPE_DESCRIPTION[type];
  const distance = TYPE_DISTANCE[type];
  const obstacles = TYPE_OBSTACLES[type];
  const yearRoman = ROMAN_NUMERALS[year];

  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    setIsFirefox(navigator?.userAgent?.indexOf?.('Firefox') > 0);
  }, []);

  return (
    <Wrapper {...rest}>
      <WrapperSvg>
        <BackgroundOuter />
        <BackgroundInner />
        <Flash color={background} />

        <RightTextGuidePath isFirefox={isFirefox} />
        <RightText color={foreground}>
          <RightTextPath isFirefox={isFirefox}>
            {distance} KILOMETERS • {obstacles} OBSTACLES
          </RightTextPath>
        </RightText>

        <LeftTextGuidePath isFirefox={isFirefox} />
        <LeftText>
          <LeftTextPath isFirefox={isFirefox}>
            {title} {yearRoman}
          </LeftTextPath>
        </LeftText>

        <StyledSpartanLogo color={background} />
      </WrapperSvg>
      <LinkContainer>
        <StyledThemeProvider
          theme={{
            textLinkColor: background,
            textLinkColorDarkMode: background,
            focusOutlineColor: background,
            focusOutlineColorDarkMode: background,
          }}
        >
          {stravaLink && (
            <StravaLink href={stravaLink}>
              <StravaIcon />
            </StravaLink>
          )}
        </StyledThemeProvider>
      </LinkContainer>
    </Wrapper>
  );
};

export default SpartanMedal;
