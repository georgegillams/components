# Smooth Corner Container

## About

The smooth corner container allows you to render a rectangular div with squircle-like smooth corners.

In supported browsers, this is achieved with [CSS Houdini](https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini) Paint API. The website [Is Houdini Ready Yet](https://ishoudinireadyyet.com/) tells you which browsers support CSS Houdini.

In unsupported browsers, the same effect is achieved using an SVG mask which is dynamically created whenever the page size changes. This is far less performant than the Houdini implementation.

If a browser does not have JavaScript enabled (or JavaScript has not yet loaded) then the container will render with regular rounded corners.

## Serving the Houdini Worklet

It is necessary for you to expose the CSS worklet so that it can be loaded by your client app. One simple way of doing this would be to copy the file to your app's static assets directory.

The worklet file can be found inside `node_modules/@george-gillams/components/smooth-corners-container/worklet.js`.

You should verify that this is visible on some URL — eg `example.com/static/smooth-corners-worklet.js`

## JS Feature Detection

For this component to work properly, it requires JS feature detection. You can use the `JSFeatureDetector` to achieve this. See [Example prerequisite code](#example-prerequisite-code).

## Loading the Houdini Worklet

When your app loads, you should load the Houdini worklet using the provided `SmoothCornersWorkletLoader`. See [Example prerequisite code](#example-prerequisite-code).

## Example prerequisite code

```js
import JSFeatureDetector, {
  NO_JS_CLASSNAME,
} from '@george-gillams/components/js-feature-detector';
import { SmoothCornersWorkletLoader } from '@george-gillams/components/smooth-corners-container';

class MyDocument extends Document {
  // ...

  render() {
    return (
      <Html lang="en-GB" className={NO_JS_CLASSNAME}>
        {/* ... */}
        <body>
          <JSFeatureDetector />
          <SmoothCornersWorkletLoader workletUrl="/static/smooth-corners-worklet.js" />
          {/* ... */}
        </body>
      </Html>
    );
  }
}
```

## Using the component

With the pre-requisites above, using the component is simple.

You can provide a cornerRadius value between `0` and `100` for each corner, and they can even all be different values.

```js
import SmoothCornersContainer from '@george-gillams/components/smooth-corners-container';

// ...

return (
  <SmoothCornersContainer
    cornerRadiuses={{
      topLeft: 40,
      topRight: 20,
      bottomRight: 0,
      bottomLeft: 90,
    }}
  >
    {/* ... */}
  </SmoothCornersContainer>
);
```

## Cross-browser testing

Once implemented, you should refer to [Is Houdini Ready Yet](https://ishoudinireadyyet.com/) and test your site in one browser that supports the Houdini Paint API, and one that doesn't. You should also be sure to test without JS in various different browsers.
