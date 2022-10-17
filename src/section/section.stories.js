import React from 'react';

import Section from './index';

const LONG_TEXT =
  'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.';

export default { title: 'Molecules/Section', component: Section };

export const Default = () => <Section name="Test" />;
export const Long = () => <Section name={LONG_TEXT} />;
export const WithAnchor = () => <Section anchor name="Test" />;
export const NoPadding = () => <Section anchor padding={false} name="Test" />;
export const WithContentAndPadding = () => (
  <Section anchor name="Test">
    Some content
  </Section>
);
export const WithContent = () => (
  <Section padding={false} anchor name="Test">
    Some content
  </Section>
);
export const NoPaddingNoAnchor = () => (
  <Section anchor={false} padding={false} name="Test" />
);
