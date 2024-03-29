import React from 'react';

import { Icon } from './icon.styles';
import { IconProps } from './constants';

const ExclamationCircle = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM10.5 5.9c0-.5.4-.9.9-.9h1.1c.5 0 .9.4.9.9V13c0 .5-.4.9-.9.9h-1.1c-.5 0-.9-.4-.9-.9V5.9zm0 11.1c0-.5.5-1 1-1h1c.5 0 1 .5 1 1v1c0 .5-.5 1-1 1h-1c-.5 0-1-.5-1-1v-1z" />
    </Icon>
  );
};

export default ExclamationCircle;
