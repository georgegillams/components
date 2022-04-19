import React from 'react';

export const JS_CLASSNAME = 'js';
export const NO_JS_CLASSNAME = 'no-js';

const JS_SCRIPT = `if("undefined"!=typeof window&&"undefined"!=typeof document){const e=document.documentElement;e.classList.add("${JS_CLASSNAME}"),e.classList.remove("${NO_JS_CLASSNAME}")}`;

const JSFeatureDetector = () => {
  return (
    /* Not using async/defer so that the script is executed before the page is rendered.  */
    <script
      dangerouslySetInnerHTML={{
        __html: JS_SCRIPT,
      }}
    />
  );
};

export default JSFeatureDetector;
