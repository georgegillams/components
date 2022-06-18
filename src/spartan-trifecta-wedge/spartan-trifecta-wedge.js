import React from 'react';
import PropTypes from 'prop-types';

import { EVENT_TYPE, TYPE_COLORS } from '../spartan-medal';
import EventPatch from '../event-patch';
import { Wrapper } from './spartan-trifecta-wedge.styles';
import SpartanLogo from '../spartan-logo/spartan-logo';

const SpartanTrifectaWedge = (props) => {
  const { type, ...rest } = props;

  const { foreground, background } = TYPE_COLORS[type];

  return (
    <Wrapper>
      <circle cx="50" cy="50" r="50" fill="#A0A0A0" />
      <circle cx="50" cy="50" r="31.5" stroke="black" />
      <path
        d="M6 50C6 74.3005 25.6995 94 50 94C74.3005 94 94 74.3005 94 50C94 25.6995 74.3005 6 50 6C25.6995 6 6 25.6995 6 50ZM85.485 50C85.485 69.5978 69.5978 85.485 50 85.485C30.4022 85.485 14.515 69.5978 14.515 50C14.515 30.4022 30.4022 14.515 50 14.515C69.5978 14.515 85.485 30.4022 85.485 50Z"
        fill={background}
      />
      <circle cx="50" cy="50" r="35.5" stroke="#FF00F5" />
      <circle cx="50.5" cy="50.5" r="22" />
      <SpartanLogo />
    </Wrapper>
  );
};

SpartanTrifectaWedge.propTypes = {
  type: PropTypes.oneOf(Object.values(EVENT_TYPE)).isRequired,
  year: PropTypes.string.isRequired,
};

export default SpartanTrifectaWedge;
