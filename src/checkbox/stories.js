/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Checkbox from './index';
import { StyledThemeProvider } from '../styled-theming';
console.log(`Checkbox`, Checkbox);

const StatefulCheckbox = (props) => {
  const [checked, setChecked] = useState(props.checked);

  return (
    <Checkbox
      name="Stateful_checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label={text('Label', 'Label')}
      disabled={boolean('Disabled', false)}
      valid={select('Valid', [null, true, false], null)}
    />
  );
};

export default { title: 'Styled/Molecules/Checkbox', component: Checkbox };

export const Default = () => <Checkbox label="Test" name="Test" />;
export const Valid = () => <Checkbox label="Test" name="Test" valid />;
export const Invalid = () => (
  <Checkbox label="Test" name="Test" valid={false} />
);
export const Disabled = () => <Checkbox label="Test" name="Test" disabled />;

export const WithExtremeLineHeight = () => (
  <Checkbox style={{ lineHeight: '5rem' }} checked label="Test" name="Test" />
);

export const ValidChecked = () => (
  <Checkbox checked label="Test" name="Test" valid />
);

export const InvalidChecked = () => (
  <Checkbox checked label="Test" name="Test" valid={false} />
);

export const DisabledChecked = () => (
  <Checkbox checked label="Test" name="Test" disabled />
);

export const Themed = () => (
  <StyledThemeProvider
    theme={{
      checkboxTickColor: 'red',
      checkboxTickColorDarkMode: 'purple',
    }}
  >
    <Checkbox checked label="Test" name="Test" />
  </StyledThemeProvider>
);

export const Stateful = () => <StatefulCheckbox />;
