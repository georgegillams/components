import React from 'react';
import PropTypes from 'prop-types';
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

const SpartanTrifectaDisplay = (props) => {
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

SpartanTrifectaDisplay.propTypes = {
  wedges: PropTypes.arrayOf(PropTypes.oneOf(Object.values(EVENT_TYPE)))
    .isRequired,
  year: PropTypes.string.isRequired,
};

export default SpartanTrifectaDisplay;
