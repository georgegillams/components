/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Card } from '../Card';

import { AnimateHeight } from './index';

const content1 = 'Lorem ipse dolor sit';
const content2 =
  'Lorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor sitttttttLorem ipse dolor sit';
const cardContent = <Card>content1</Card>;

const StatefulAnimateHeight = props => {
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState(false);
  const [margin, setMargin] = useState(false);
  const [bleedEdges, setBleedEdges] = useState(false);

  const OuterComponent = bleedEdges
    ? p => <Card {...p} />
    : p => <div {...p} />;

  return (
    <>
      <AnimateHeight
        verticalMargin={margin ? 16 : 0}
        expanded={expanded}
        bleedEdges={bleedEdges}
        {...props}
      >
        <OuterComponent style={margin ? { marginBottom: '1rem' } : {}}>
          {content ? content1 : content2}
          <div
            style={{
              marginTop: '2rem',
              width: '100%',
              height: '1rem',
              background: 'red',
            }}
          />
        </OuterComponent>
      </AnimateHeight>
      <button
        type="button"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        Toggle expanded
      </button>
      <button
        type="button"
        onClick={() => {
          setMargin(!margin);
        }}
      >
        Toggle margin
      </button>
      <button
        type="button"
        onClick={() => {
          setContent(!content);
        }}
      >
        Toggle content
      </button>
      <button
        type="button"
        onClick={() => {
          setBleedEdges(!bleedEdges);
        }}
      >
        Toggle bleedEdges
      </button>
    </>
  );
};

export default { title: 'Animate height' };

export const Expanded = () => (
  <AnimateHeight expanded>{content1}</AnimateHeight>
);
export const ExpandedWithBleed = () => (
  <AnimateHeight bleedEdges expanded>
    {cardContent}
  </AnimateHeight>
);
ExpandedWithBleed.storyName = 'Expanded with bleeding edges';
export const Collapsed = () => <AnimateHeight>{content1}</AnimateHeight>;
export const CollapsedWithBleed = () => (
  <AnimateHeight bleedEdges>{cardContent}</AnimateHeight>
);
CollapsedWithBleed.storyName = 'Collapsed with bleeding edges';
export const Stateful = () => <StatefulAnimateHeight />;
