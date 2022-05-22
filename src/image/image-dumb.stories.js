import React, { useState } from 'react';

import ImageDumb from './image-dumb';

const StatefulImageDumb = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <ImageDumb
        {...{
          loaded,
        }}
        {...props}
      />
      <button
        type="button"
        onClick={() => {
          setLoaded(!loaded);
        }}
      >
        {loaded ? 'Unload' : 'Load'}
      </button>
    </>
  );
};

export default { title: 'Sass/Molecules/Image dumb', component: ImageDumb };

export const Default = () => (
  <ImageDumb
    loaded
    aspectX={460}
    aspectY={210}
    lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
    darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
    imgProps={{
      alt: 'Some description',
    }}
  />
);
export const WithImgClassname = () => (
  <ImageDumb
    loaded
    aspectX={460}
    aspectY={210}
    lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
    darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
    imgProps={{
      alt: 'Some description',
      className: 'test',
    }}
  />
);
export const WidthPercent = () => (
  <ImageDumb
    loaded
    aspectX={460}
    aspectY={210}
    lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
    darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
    imgProps={{
      alt: 'Some description',
    }}
    style={{ width: '70%' }}
  />
);
export const WidthAbsolute = () => (
  <ImageDumb
    loaded
    aspectX={460}
    aspectY={210}
    lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
    darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
    imgProps={{
      alt: 'Some description',
    }}
    style={{ width: '35rem' }}
  />
);
export const Stateful = () => (
  <StatefulImageDumb
    aspectX={460}
    aspectY={210}
    lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
    darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
    imgProps={{
      alt: 'Some description',
    }}
  />
);
export const NotLoaded = () => (
  <ImageDumb
    loaded={false}
    aspectX={460}
    aspectY={210}
    lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
    darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
    imgProps={{
      alt: 'Some description',
    }}
  />
);
export const NotLoadedWidthPercent = () => (
  <ImageDumb
    loaded={false}
    aspectX={460}
    aspectY={210}
    lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
    darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
    imgProps={{
      alt: 'Some description',
    }}
    style={{ width: '70%' }}
  />
);
export const NotLoadedWidthAbsolute = () => (
  <ImageDumb
    loaded={false}
    aspectX={460}
    aspectY={210}
    lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
    darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
    imgProps={{
      alt: 'Some description',
    }}
    style={{ width: '35rem' }}
  />
);
export const DownThePage = () => (
  <>
    <div style={{ height: '50rem', width: '100%', background: 'red' }} />
    <ImageDumb
      loaded
      aspectX={460}
      aspectY={210}
      lightSrc="https://live.staticflickr.com/65535/49195241431_7880522df6_k.jpg"
      darkSrc="https://live.staticflickr.com/65535/49195241431_7880522df6_k.jpg"
      imgProps={{
        alt: 'Some description',
      }}
    />
  </>
);
