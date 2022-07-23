import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Skeleton, { SKELETON_STYLES } from '../skeleton';
import Section from '../section';

import LoadingCover from './index';

const LoadingSkeleton = () => (
  <>
    <Skeleton skeletonStyle={SKELETON_STYLES.section} />
    <Skeleton skeletonStyle={SKELETON_STYLES.card} />
  </>
);

export default {
  title: 'Styled/Molecules/Loading cover',
  component: LoadingCover,
};

export const Default = () => (
  <LoadingCover
    loadingSkeleton={LoadingSkeleton}
    loading={boolean('loading', true)}
    error={boolean('error', false)}
  >
    <Section>This content is loading.</Section>
  </LoadingCover>
);

export const FlexCentered = () => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <LoadingCover
      loadingSkeleton={LoadingSkeleton}
      loading={boolean('loading', true)}
      error={boolean('error', true)}
    >
      <Section>This content is loading.</Section>
    </LoadingCover>
  </div>
);
