/* eslint-disable */
import React, { Component, useState } from 'react';

import Input from './index';
import { boolean, select } from '@storybook/addon-knobs';

export interface StatefulInputProps {
  value?: string;
}

const StatefulInput = (props: StatefulInputProps) => {
  const [value, setValue] = useState(props.value || 'Type here');

  return (
    <Input
      name="Stateful_input"
      // @ts-ignore
      valid={select('Valid', [true, false, null], true)}
      enabled={boolean('Enabled', true)}
      value={value}
      // @ts-ignore
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Default = () => <Input value="Test" />;
export const Valid = () => <Input value="Test" valid />;
export const Invalid = () => <Input value="Test" valid={false} />;
export const Disabled = () => <Input value="Test" enabled={false} />;
export const Password = () => <Input type="password" value="Test" valid />;
export const Stateful = () => <StatefulInput />;
