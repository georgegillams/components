import React from 'react';
import PropTypes from 'prop-types';

import { PATCH_TYPE, TYPE_COLORS, TYPE_DESCRIPTION } from './constants';
import EventPatch from '../event-patch';

const ToughMudderPatch = (props) => {
  const { type, ...rest } = props;

  const { foreground, background } = TYPE_COLORS[type];
  const title = TYPE_DESCRIPTION[type];

  return (
    <EventPatch
      foreground={foreground}
      background={background}
      title={title}
      {...rest}
    />
  );
};

ToughMudderPatch.propTypes = {
  type: PropTypes.oneOf(Object.values(PATCH_TYPE)).isRequired,
  year: PropTypes.string.isRequired,
  stravaLink: PropTypes.string,
};

ToughMudderPatch.defaultProps = {
  stravaLink: null,
};

export default ToughMudderPatch;
