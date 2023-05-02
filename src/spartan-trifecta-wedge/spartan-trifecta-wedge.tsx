import React, { useMemo } from 'react';

import { EVENT_TYPE, TYPE_COLORS } from '../spartan-medal';
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

  const isFirefox = useMemo(() => {
    return navigator.userAgent.indexOf('Firefox') > 0;
  }, []);

  return (
    <Wrapper {...rest}>
      <BackgroundOuter />
      <BackgroundInner />
      <InnerDecoration />
      <Flash color={background} />
      <TopTextGuidePath
        id={`textLineTop${wedgePosition}`}
        isFirefox={isFirefox}
      />
      <TopText color={foreground}>
        <TopTextPath
          xlinkHref={`#textLineTop${wedgePosition}`}
          isFirefox={isFirefox}
        >
          SPARTAN {year}
        </TopTextPath>
      </TopText>

      <BottomTextGuidePath
        id={`textLineBottom${wedgePosition}`}
        isFirefox={isFirefox}
      />
      <BottomText color={foreground}>
        <BottomTextPath
          xlinkHref={`#textLineBottom${wedgePosition}`}
          isFirefox={isFirefox}
        >
          TRIFECTA TRIBE
        </BottomTextPath>
      </BottomText>
      <StyledSpartanLogo color={background} />
    </Wrapper>
  );
};

export default SpartanTrifectaWedge;
