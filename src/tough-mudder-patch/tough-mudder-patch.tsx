import React from 'react';
import PropTypes from 'prop-types';

import { PATCH_TYPE, TYPE_COLORS, TYPE_DESCRIPTION } from './constants';
import EventPatch from '../event-patch';
import { EventPatchProps } from '../event-patch/event-patch';

export type ToughMudderPatchProps = {
  [K in keyof EventPatchProps as K extends 'foreground' | 'background' | 'title'
    ? never
    : K]: EventPatchProps[K];
} & {
  type: typeof PATCH_TYPE[keyof typeof PATCH_TYPE];
};

const ToughMudderPatch = (props: ToughMudderPatchProps) => {
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

export default ToughMudderPatch;
