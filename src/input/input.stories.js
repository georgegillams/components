/* eslint-disable */
import React, { Component, useState } from 'react';

import Input from './index';
import { boolean, select } from '@storybook/addon-knobs';

const StatefulInput = (props) => {
  const [value, setValue] = useState(props.value || 'Type here');

  return (
    <Input
      name="Stateful_input"
      valid={select('Valid', [true, false, null], true)}
      enabled={boolean('Enabled', true)}
      value={value}
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
