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
  ThickRing,
  ThinRing,
  Links,
  LogoBackground,
  BottomTextPath,
  BottomTextGuidePath,
  BottomText,
} from './spartan-medal-2024.styles';
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

const SpartanMedal2024 = (props: SpartanMedalProps) => {
  const { type, year, stravaLink, ...rest } = props;

  const { background } = TYPE_COLORS[type];
  const distance = TYPE_DISTANCE[type];
  const obstacles = TYPE_OBSTACLES[type];

  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    setIsFirefox(navigator?.userAgent?.indexOf?.('Firefox') > 0);
  }, []);

  const topText = `SPARTAN ${type.toUpperCase()}`;
  const topTextOffset = (isFirefox ? 6 : 6) + 44.6 - topText.length;
  const bottomText = `${distance} KILOMETRES • ${obstacles} OBSTACLES`;

  return (
    <Wrapper {...rest}>
      <WrapperSvg>
        <ThickRing />
        <ThinRing />
        <Links />
        <LogoBackground color={background} />
        <StyledSpartanLogo />

        <TopTextGuidePath />
        <TopText isFirefox={isFirefox}>
          <TopTextPath startOffset={topTextOffset}>{topText}</TopTextPath>
        </TopText>

        <BottomTextGuidePath />
        <BottomText isFirefox={isFirefox}>
          <BottomTextPath>{bottomText}</BottomTextPath>
        </BottomText>
      </WrapperSvg>
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

export default SpartanMedal2024;
