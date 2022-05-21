import React from 'react';
import PropTypes from 'prop-types';

import { Section } from './debug-object.styles';
import ObjectAsList from '../object-as-list';

const DebugObject = (props) => {
  const { debugTitle, debugObject } = props;

  return (
    <Section name={`${debugTitle || 'Debug object'}`}>
      <ObjectAsList value={debugObject} />
    </Section>
  );
};

DebugObject.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  debugObject: PropTypes.object.isRequired,
  debugTitle: PropTypes.string,
};

DebugObject.defaultProps = {
  debugTitle: null,
};

export default DebugObject;
