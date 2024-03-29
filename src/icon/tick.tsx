import React from 'react';

import { Icon } from './icon.styles';
import { IconProps } from './constants';

const Tick = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path d="M9.4 20c-.5 0-.9-.2-1.3-.5l-5.8-5.1c-.4-.4-.5-1-.1-1.4l1.3-1.5c.4-.4 1-.5 1.4-.1l4 3.5c.2.1.4.1.6 0l9.2-10.5c.4-.4 1-.5 1.4-.1l1.5 1.3c.4.4.5 1 .1 1.4L10.9 19.3c-.4.5-.9.7-1.5.7z" />
    </Icon>
  );
};

export default Tick;
