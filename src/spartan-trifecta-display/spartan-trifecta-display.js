import React from 'react';
import PropTypes from 'prop-types';
import {
  Background,
  StyledSpartanTrifectaWedge,
  Wrapper,
} from './spartan-trifecta-display.styles';
import { EVENT_TYPE } from '../spartan-medal';

const SpartanTrifectaDisplay = (props) => {
  const { wedges, year, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <Background />
      {wedges.map(
        (type, index) =>
          type && (
            <StyledSpartanTrifectaWedge type={type} year={year} index={index} />
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
