/* eslint-disable */
import React, { Component, ComponentType, useState } from 'react';

import Select from './index';

const selectOptions = [
  { value: 'apple', name: 'Apple' },
  { value: 'banana', name: 'Banana' },
  { value: 'cranberry', name: 'Cranberry' },
];

const StatefulSelect = () => {
  const [value, setValue] = useState('');

  return (
    <Select
      options={selectOptions}
      value={value}
      onChange={(e) => setValue((e.target as HTMLInputElement).value)}
    />
  );
};

export default { title: 'Atoms/Select', component: Select };

export const Default = () => <Select value="apple" options={selectOptions} />;
export const Valid = () => (
  <Select value="apple" valid options={selectOptions} />
);
export const Invalid = () => (
  <Select value="apple" valid={false} options={selectOptions} />
);
export const Disabled = () => (
  <Select value="apple" enabled={false} options={selectOptions} />
);
export const WithOther = () => (
  <Select value="other value" options={selectOptions} />
);
export const Stateful = () => <StatefulSelect />;
