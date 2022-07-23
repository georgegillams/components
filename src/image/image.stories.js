import React, { useState } from 'react';
import { JS_CLASSNAME } from '../js-feature-detector';

import Image from './index';

export default { title: 'Styled/Molecules/Image', component: Image };

export const Loading = () => (
  <div className={JS_CLASSNAME}>
    <Image
      aspectX={460}
      aspectY={210}
      lightSrc="null"
      darkSrc="null"
      imgProps={{
        alt: 'Some description',
      }}
    />
  </div>
);
export const Default = () => (
  <div className={JS_CLASSNAME}>
    <Image
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
    />
  </div>
);
