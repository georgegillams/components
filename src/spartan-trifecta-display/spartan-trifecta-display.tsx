import React from 'react';
import {
  Background,
  OuterText,
  OuterTextGuidePath,
  OuterTextPath,
  StyledSpartanTrifectaWedge,
  Wrapper,
} from './spartan-trifecta-display.styles';
import { EVENT_TYPE } from '../spartan-medal';
import { notBlack } from '../constants/colors';

export interface SpartanTrifectaDisplayProps
  extends React.HTMLAttributes<SVGElement> {
  wedges: Array<typeof EVENT_TYPE[keyof typeof EVENT_TYPE] | null>;
  year?: string;
}

const SpartanTrifectaDisplay = (props: SpartanTrifectaDisplayProps) => {
  const { wedges, year, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <Background />

      <OuterTextGuidePath />
      <OuterText color={notBlack}>
        <OuterTextPath startOffset={166}>CAMARADERIE</OuterTextPath>
        <OuterTextPath startOffset={286}>COURAGE</OuterTextPath>
        <OuterTextPath startOffset={58}>COMPETITION</OuterTextPath>
      </OuterText>

      {wedges.map(
        (type, index) =>
          type && (
            <StyledSpartanTrifectaWedge
              key={`${type}_${index}`}
              type={type}
              year={year}
              index={index}
              wedgePosition={`${index}`}
            />
          ),
      )}
    </Wrapper>
  );
};

export default SpartanTrifectaDisplay;
