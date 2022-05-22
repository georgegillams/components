import React, { useState } from 'react';

import Image from './index';

export default { title: 'Sass/Molecules/Image', component: Image };

export const Loading = () => (
  <Image
    aspectX={460}
    aspectY={210}
    lightSrc="null"
    darkSrc="null"
    imgProps={{
      alt: 'Some description',
    }}
  />
);
export const Default = () => (
  <Image
    aspectX={460}
    aspectY={210}
    lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
    darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
    imgProps={{
      alt: 'Some description',
    }}
  />
);
