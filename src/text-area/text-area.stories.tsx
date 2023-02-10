/* eslint-disable */
import React, { useState } from 'react';

import TextArea from './index';

const StatefulTextArea = () => {
  const [value, setValue] = useState('Long text…');

  return (
    <TextArea
      value={value}
      onChange={(e) => setValue((e.target as HTMLInputElement).value)}
    />
  );
};

export default {
  title: 'Atoms/Text area',
  component: TextArea,
};

export const Default = () => <TextArea value="Test" />;
export const Valid = () => <TextArea value="Test" valid />;
export const Invalid = () => <TextArea value="Test" valid={false} />;
export const Disabled = () => <TextArea value="Test" enabled={false} />;
export const Stateful = () => <StatefulTextArea />;
