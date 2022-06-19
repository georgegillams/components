import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from './icon.styles';

const Strava = (props) => {
  return (
    <Icon {...props}>
      <path d="M10.5714 1.2381L4.28571 13.5238H8L10.5714 8.66667L13.1429 13.5238H16.9524L10.5714 1.2381Z" />
      <path
        d="M15.0476 22.7619L10.381 13.5238H13.2381L15.0476 17.2381L16.9524 13.5238H19.7143L15.0476 22.7619Z"
        fill-opacity="0.5"
      />
    </Icon>
  );
};

export default Strava;
