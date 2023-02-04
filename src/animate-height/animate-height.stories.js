import React, { useState } from 'react';

import Card from '../card';

import AnimateHeight from './index';

const content1 = 'Lorem ipse dolor sit';
const content2 =
  'Lorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor sitttttttLorem ipse dolor sit';
const cardContent = <Card>content1</Card>;

const StatefulAnimateHeight = (props) => {
  const { children, ...rest } = props;
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState(false);
  const [margin, setMargin] = useState(false);
  const [bleedEdges, setBleedEdges] = useState(false);

  const OuterComponent = bleedEdges
    ? ({ ...p }) => <Card {...p} />
    : ({ ...p }) => <div {...p} />;

  return (
    <>
      <AnimateHeight
        verticalMargin={margin ? 16 : 0}
        expanded={expanded}
        bleedEdges={bleedEdges}
        {...rest}
      >
        <>
          <OuterComponent style={margin ? { marginBottom: '1rem' } : {}}>
            {content ? content1 : content2}
            {!children && (
              <div
                style={{
                  marginTop: '2rem',
                  width: '100%',
                  height: '1rem',
                  background: 'red',
                }}
              />
            )}
          </OuterComponent>
          {children}
        </>
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

export default {
  title: 'Molecules/Animate height',
  component: AnimateHeight,
};

export const Expanded = () => (
  <AnimateHeight expanded>{content1}</AnimateHeight>
);
export const ExpandedWithBleedingEdges = () => (
  <AnimateHeight bleedEdges expanded>
    {cardContent}
  </AnimateHeight>
);
export const Collapsed = () => <AnimateHeight>{content1}</AnimateHeight>;
export const CollapsedWithBleedingEdges = () => (
  <AnimateHeight bleedEdges>{cardContent}</AnimateHeight>
);
export const Stateful = () => <StatefulAnimateHeight />;
export const LargeStateful = () => (
  <>
    <div style={{ background: 'red', width: '100%', height: '44rem' }} />
    <StatefulAnimateHeight>
      <div style={{ background: 'yellow', width: '100%', height: '44rem' }} />
    </StatefulAnimateHeight>
    <div style={{ background: 'green', width: '100%', height: '44rem' }} />
  </>
);
