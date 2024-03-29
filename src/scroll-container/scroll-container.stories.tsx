import React from 'react';

import withScroll from './index';
import { OptionalWithScrollState } from './utils';

const ScrollReporter = (props: OptionalWithScrollState) => {
  const {
    inView,
    scrollPosition,
    scrollPositionVh,

    outOfView,
    justInView,
    mostlyInView,
    fullyInView,

    hasBeenInView,
    hasBeenOutOfView,
    hasBeenJustInView,
    hasBeenMostlyInView,
    hasBeenFullyInView,
  } = props;

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'red',
        padding: '2rem 0 10rem 0',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {`inView: ${inView ? 'YES' : 'NO'}`}
      <br />
      {`scrollPosition: ${scrollPosition}`}
      <br />
      {`scrollPositionVh: ${scrollPositionVh}`}
      <br />
      {`outOfView: ${outOfView}`}
      <br />
      {`justInView: ${justInView}`}
      <br />
      {`mostlyInView: ${mostlyInView}`}
      <br />
      {`fullyInView: ${fullyInView}`}
      <br />
      {`hasBeenInView: ${hasBeenInView ? 'YES' : 'NO'}`}
      <br />
      {`hasBeenOutOfView: ${hasBeenOutOfView}`}
      <br />
      {`hasBeenJustInView: ${hasBeenJustInView}`}
      <br />
      {`hasBeenMostlyInView: ${hasBeenMostlyInView}`}
      <br />
      {`hasBeenFullyInView: ${hasBeenFullyInView}`}
    </div>
  );
};

const ScrollReportedWithScroll = withScroll(ScrollReporter);

export default { title: 'HOCs/Scroll container' };

export const ScrollContainer = () => (
  <div
    style={{
      height: '200vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
    }}
  >
    <ScrollReportedWithScroll />
  </div>
);
