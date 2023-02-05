import React from 'react';

import Subsection from './index';

const LONG_TEXT =
  'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.';

export default { title: 'Molecules/Subsection', component: Subsection };

export const Default = () => <Subsection name="Test" />;
export const Long = () => <Subsection name={LONG_TEXT} />;
export const WithAnchor = () => <Subsection anchor name="Test" />;
export const NoPadding = () => (
  <Subsection anchor padding={false} name="Test" />
);
export const WithContentAndPadding = () => (
  <Subsection anchor name="Test">
    Some content
  </Subsection>
);
export const WithContent = () => (
  <Subsection padding={false} anchor name="Test">
    Some content
  </Subsection>
);
export const NoPaddingNoAnchor = () => (
  <Subsection anchor={false} padding={false} name="Test" />
);
