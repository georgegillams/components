import React, { useEffect, useState } from 'react';

import { EVENT_TYPE, ROMAN_NUMERALS, TYPE_COLORS } from './constants';
import {
  Wrapper,
  StyledSpartanLogo,
  LinkContainer,
  StravaLink,
  WrapperSvg,
  Background,
  LogoBackground,
  Flashes,
  BackgroundCircle,
  Ring3,
  Ring4,
  Ring2,
  Ring1,
  LeftTextGuidePath,
  LeftText,
  LeftTextPath,
  CompassLight,
  CompassMedium,
  CompassDark,
  BottomText,
  BottomTextGuidePath,
  BottomTextPath,
  CompassDecoration,
  LeftRightDecoration,
} from './spartan-ultra-medal-2025.styles';
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

const SpartanUltraMedal2025 = (props: SpartanMedalProps) => {
  const { type, year, stravaLink, ...rest } = props;

  const { background } = TYPE_COLORS[type];

  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    setIsFirefox(navigator?.userAgent?.indexOf?.('Firefox') > 0);
  }, []);

  const leftText = `SPARTAN ${type.toUpperCase()}`;
  const bottomText = `${year}`;

  return (
    <Wrapper {...rest}>
      <WrapperSvg>
        <Background />
        <Flashes color={background} />
        <BackgroundCircle />
        <Ring4 />
        <Ring3 />
        <Ring2 />
        <LogoBackground color={background} />
        <StyledSpartanLogo />

        <CompassLight />
        <CompassMedium />
        <CompassDark />

        <Ring1 />

        <CompassDecoration />

        <LeftRightDecoration />

        <LeftTextGuidePath />
        <LeftText isFirefox={isFirefox}>
          <LeftTextPath>{leftText}</LeftTextPath>
        </LeftText>

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

export default SpartanUltraMedal2025;
