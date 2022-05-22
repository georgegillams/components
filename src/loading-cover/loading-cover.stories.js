import React, { useState } from 'react';

import SectionSkeleton from '../skeleton/section-skeleton';
import CardSkeleton from '../skeleton/card-skeleton';
import Section from '../section';
import { cssModules } from '../helpers/cssModules';

import STYLES from './stories.scss';

import LoadingCover from './index';

const getClassName = cssModules(STYLES);

const Skeleton = () => (
  <>
    <SectionSkeleton /> <CardSkeleton />
  </>
);

const StatefulLoadingCover = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <>
      <LoadingCover loadingSkeleton={Skeleton} loading={loading} error={error}>
        <Section>This content is loading.</Section>
      </LoadingCover>
      <button
        type="button"
        onClick={() => {
          setLoading(!loading);
        }}
        onKeyPress={() => {
          setLoading(!loading);
        }}
      >
        Toggle loading
      </button>
      <button
        type="button"
        onClick={() => {
          setError(!error);
        }}
        onKeyPress={() => {
          setError(!error);
        }}
      >
        Toggle error
      </button>
    </>
  );
};

export default {
  title: 'Sass/Molecules/Loading cover',
  component: LoadingCover,
};

export const Default = () => <StatefulLoadingCover />;
export const FlexCentered = () => (
  <div className={getClassName('stories__flex')}>
    <StatefulLoadingCover />
  </div>
);
