import React from 'react';

import Skeleton from './skeleton';

import {
  ButtonSkeleton,
  CardSkeleton,
  CheckboxSkeleton,
  CompactCardSkeleton,
  FormHintSkeleton,
  FormLabelSkeleton,
  InfoCellSkeleton,
  InputSkeleton,
  NotificationSkeleton,
  ProgressSkeleton,
  SectionSkeleton,
  SmallButtonSkeleton,
  SmallProgressSkeleton,
  SubSectionSkeleton,
  TextLinkSkeleton,
  TicketStatusSkeleton,
} from './index';

export default { title: 'Sass/Molecules/Skeletons', component: Skeleton };

export {
  ButtonSkeleton,
  FormHintSkeleton,
  FormLabelSkeleton,
  InfoCellSkeleton,
  InputSkeleton,
  NotificationSkeleton,
  ProgressSkeleton,
  SectionSkeleton,
  SmallButtonSkeleton,
  SmallProgressSkeleton,
  SubSectionSkeleton,
  TextLinkSkeleton,
  TicketStatusSkeleton,
};

export const Combination = () => (
  <div style={{ width: '100%', overflow: 'hidden' }}>
    <ButtonSkeleton />
    <CardSkeleton />
    <CheckboxSkeleton />
    <CompactCardSkeleton style={{ marginLeft: '15rem' }} />
    <CompactCardSkeleton style={{ marginLeft: '30rem' }} />
    <CompactCardSkeleton style={{ marginLeft: '45rem' }} />
  </div>
);
