import React, { useEffect, useState } from 'react';

import {
  EVENT_TYPE,
  ROMAN_NUMERALS,
  TYPE_COLORS,
  TYPE_DISTANCE,
  TYPE_OBSTACLES,
} from './constants';
import {
  Wrapper,
  BackgroundOuter,
  BackgroundInner,
  StyledSpartanLogo,
  LinkContainer,
  StravaLink,
  WrapperSvg,
  Flash,
  FlashRings1,
  FlashRings2,
  TopTextGuidePath,
  TopText,
  TopTextPath,
  BottomDecorativeLine,
  InsideTextGuidePath,
  InsideText,
  InsideTextPath,
  Year,
  FlashEdging,
} from './spartan-medal-2023.styles';
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

const SpartanMedal2023 = (props: SpartanMedalProps) => {
  const { type, year, stravaLink, ...rest } = props;

  const { background } = TYPE_COLORS[type];
  const distance = TYPE_DISTANCE[type];
  const obstacles = TYPE_OBSTACLES[type];

  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    setIsFirefox(navigator?.userAgent?.indexOf?.('Firefox') > 0);
  }, []);

  const topText = `SPARTAN ${type.toUpperCase()} FINISHER | ${distance}K | ${obstacles} OBSTACLES`;
  const topTextOffset = (isFirefox ? 0 : 2) + 44.6 - topText.length;

  return (
    <Wrapper {...rest}>
      <WrapperSvg>
        <BackgroundInner />
        <BackgroundOuter />
        <BottomDecorativeLine />
        <Flash color={background} />
        <FlashEdging />
        <FlashRings1 />
        <FlashRings2 />

        <TopTextGuidePath isFirefox={isFirefox} />
        <TopText>
          <TopTextPath startOffset={topTextOffset}>{topText}</TopTextPath>
        </TopText>

        <InsideTextGuidePath isFirefox={isFirefox} />
        <InsideText isFirefox={isFirefox}>
          <InsideTextPath>
            SPARTAN {year} • MOPA TΩN ΠYΛOΣ • TRIFECTA QUALIFIER •{' '}
          </InsideTextPath>
        </InsideText>

        <StyledSpartanLogo />
      </WrapperSvg>
      <Year>{year}</Year>
      <LinkContainer>
        <StyledThemeProvider
          theme={{
            textLinkColor: background,
            textLinkColorDarkMode: background,
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

export default SpartanMedal2023;
