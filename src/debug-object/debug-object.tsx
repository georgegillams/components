import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { Section } from './debug-object.styles';
import ObjectAsList from '../object-as-list';

export interface DebugObjectProps extends HTMLAttributes<HTMLDivElement> {
  debugTitle?: string;
  debugObject: {};
}

const DebugObject = (props: DebugObjectProps) => {
  const { debugTitle, debugObject } = props;

  return (
    <Section name={`${debugTitle || 'Debug object'}`}>
      <ObjectAsList value={debugObject} />
    </Section>
  );
};

export default DebugObject;
