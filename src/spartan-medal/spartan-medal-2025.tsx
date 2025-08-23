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
  StyledSpartanLogo,
  LinkContainer,
  StravaLink,
  WrapperSvg,
  TopTextGuidePath,
  TopText,
  TopTextPath,
  Year,
  Background,
  BackgroundRing,
  Tab,
  LogoBackground,
  BottomLeftTextPath,
  BottomRightTextGuidePath,
  BottomRightTextPath,
  BottomLeftTextGuidePath,
  BottomText,
  BrokenPiecesBackground,
  BrokenPieces,
} from './spartan-medal-2025.styles';
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

const SpartanMedal2025 = (props: SpartanMedalProps) => {
  const { type, year, stravaLink, ...rest } = props;

  const yearFirstHalf = year.slice(0, 2);
  const yearSecondHalf = year.slice(2);

  const { background } = TYPE_COLORS[type];
  const distance = TYPE_DISTANCE[type];
  const obstacles = TYPE_OBSTACLES[type];

  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    setIsFirefox(navigator?.userAgent?.indexOf?.('Firefox') > 0);
  }, []);

  const topText = `SPARTAN ${type.toUpperCase()}`;
  const topTextOffset = (isFirefox ? 7 : 7) + 44.6 - topText.length;
  const bottomLeftText = `${distance} KILOMETRES`;
  const bottomRightText = `${obstacles} OBSTACLES`;

  return (
    <Wrapper {...rest}>
      <WrapperSvg>
        <Background />
        <BrokenPiecesBackground color={background} />
        <BrokenPieces />
        <BackgroundRing />
        <Tab />

        <TopTextGuidePath />
        <TopText isFirefox={isFirefox}>
          <TopTextPath startOffset={topTextOffset}>{topText}</TopTextPath>
        </TopText>

        <BottomLeftTextGuidePath />
        <BottomText isFirefox={isFirefox}>
          <BottomLeftTextPath>{bottomLeftText}</BottomLeftTextPath>
        </BottomText>

        <BottomRightTextGuidePath />
        <BottomText isFirefox={isFirefox}>
          <BottomRightTextPath>{bottomRightText}</BottomRightTextPath>
        </BottomText>

        <LogoBackground color={background} />
        <StyledSpartanLogo />
      </WrapperSvg>
      <Year>
        <span>{yearFirstHalf}</span>
        <span>{yearSecondHalf}</span>
      </Year>
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

export default SpartanMedal2025;
