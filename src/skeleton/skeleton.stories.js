import React from 'react';

import Skeleton, { SKELETON_STYLES } from './index';

export default { title: 'Molecules/Skeletons', component: Skeleton };

export const Button = () => <Skeleton skeletonStyle={SKELETON_STYLES.button} />;
export const ButtonSmall = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.buttonSmall} />
);
export const Card = () => <Skeleton skeletonStyle={SKELETON_STYLES.card} />;
export const CardCompact = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.cardCompact} />
);
export const Checkbox = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.checkbox} />
);
export const FormHint = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.formHint} />
);
export const FormLabel = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.formLabel} />
);
export const InfoCell = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.infoCell} />
);
export const Input = () => <Skeleton skeletonStyle={SKELETON_STYLES.input} />;
export const Notification = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.notification} />
);
export const Progress = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.progress} />
);
export const ProgressSmall = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.progressSmall} />
);
export const Section = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.section} />
);
export const Subsection = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.subsection} />
);
export const TextLink = () => (
  <Skeleton skeletonStyle={SKELETON_STYLES.textLink} />
);

export const Combination = () => (
  <div style={{ width: '100%', overflow: 'hidden' }}>
    <Skeleton skeletonStyle={SKELETON_STYLES.button} />
    <Skeleton skeletonStyle={SKELETON_STYLES.card} />
    <Skeleton skeletonStyle={SKELETON_STYLES.checkbox} />
    <Skeleton
      skeletonStyle={SKELETON_STYLES.cardCompact}
      style={{ marginLeft: '15rem' }}
    />
    <Skeleton
      skeletonStyle={SKELETON_STYLES.cardCompact}
      style={{ marginLeft: '30rem' }}
    />
    <Skeleton
      skeletonStyle={SKELETON_STYLES.cardCompact}
      style={{ marginLeft: '45rem' }}
    />
  </div>
);
