import React from 'react';
import Paragraph from '../paragraph';

import { CodeInline } from './index';

export default { title: 'Molecules/Code inline', component: CodeInline };

export const Default = () => <CodeInline>This is some code.</CodeInline>;
export const InheritColor = () => (
  <div style={{ color: 'red' }}>
    <CodeInline inheritColor={true}>This is some code.</CodeInline>
  </div>
);
export const InText = () => (
  <Paragraph>
    This is a sentence containing <CodeInline>some</CodeInline> code.
  </Paragraph>
);
