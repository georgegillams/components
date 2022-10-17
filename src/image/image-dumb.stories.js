import React, { useState } from 'react';
import { JS_CLASSNAME, NO_JS_CLASSNAME } from '../js-feature-detector';

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

export default { title: 'Molecules/Image dumb', component: ImageDumb };

export const Default = () => (
  <div className={JS_CLASSNAME}>
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
  </div>
);
export const WidthPercent = () => (
  <div className={JS_CLASSNAME}>
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
  </div>
);
export const WidthAbsolute = () => (
  <div className={JS_CLASSNAME}>
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
  </div>
);
export const Stateful = () => (
  <div className={JS_CLASSNAME}>
    <StatefulImageDumb
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
export const NotLoaded = () => (
  <div className={JS_CLASSNAME}>
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
  </div>
);
export const NotLoadedNoJs = () => (
  <div className={NO_JS_CLASSNAME}>
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
  </div>
);
export const NotLoadedWidthPercent = () => (
  <div className={JS_CLASSNAME}>
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
  </div>
);
export const NotLoadedWidthAbsolute = () => (
  <div className={JS_CLASSNAME}>
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
  </div>
);
export const DownThePage = () => (
  <div className={JS_CLASSNAME}>
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
  </div>
);
