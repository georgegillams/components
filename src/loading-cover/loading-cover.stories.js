import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';

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
  <div className={getClassName('stories__flex')}>
    <LoadingCover
      loadingSkeleton={LoadingSkeleton}
      loading={boolean('loading', true)}
      error={boolean('error', true)}
    >
      <Section>This content is loading.</Section>
    </LoadingCover>
  </div>
);
