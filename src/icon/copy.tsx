import React from 'react';

import { Icon } from './icon.styles';
import { IconProps } from './constants';

const Copy = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path d="M13.5 20h-7a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5zM14 6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm4-4h-8a2 2 0 0 0-2 2h9.5a.5.5 0 0 1 .5.5V18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
    </Icon>
  );
};

export default Copy;
