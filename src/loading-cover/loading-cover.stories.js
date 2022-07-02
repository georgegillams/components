import React, { useState } from 'react';

import Skeleton, { SKELETON_STYLES } from '../skeleton';
import Section from '../section';
import { cssModules } from '../helpers/cssModules';

import STYLES from './stories.scss';

import LoadingCover from './index';

const getClassName = cssModules(STYLES);

const LoadingSkeleton = () => (
  <>
    <Skeleton skeletonStyle={SKELETON_STYLES.section} />
    <Skeleton skeletonStyle={SKELETON_STYLES.card} />
  </>
);

const StatefulLoadingCover = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <>
      <LoadingCover
        loadingSkeleton={LoadingSkeleton}
        loading={loading}
        error={error}
      >
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
