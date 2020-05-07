/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FormBuilder } from './index';

const selectOptions = [
  { value: 'apple', name: 'Apple' },
  { value: 'banana', name: 'Banana' },
  { value: 'cranberry', name: 'Cranberry' },
];

const formFields = [
  { id: 'field1', name: 'Field 1', validationRegex: null, show: true },
  { id: 'field2', name: 'Field 2', validationRegex: null, show: true },
  { id: 'field3', name: 'Field 3', validationRegex: null, show: true },
  {
    id: 'field4',
    name: 'Field 4',
    validationRegex: null,
    type: 'CHECKBOX',
    show: true,
  },
  {
    id: 'field5',
    name: 'Field 5',
    validationRegex: null,
    type: 'SELECT',
    options: selectOptions,
    enableOther: true,
    show: true,
  },
  {
    id: 'field6',
    name: 'Field 6',
    validationRegex: null,
    long: true,
    show: true,
  },
];

storiesOf('FormBuilder', module)
  .add('Default', () => (
    <FormBuilder formFields={formFields} entity={{}} submitLabel="Submit" />
  ))
  .add('No autocomplete', () => (
    <FormBuilder
      formFields={[
        {
          id: 'ff1',
          name: 'Input no autocomplete',
          show: true,
          autocomplete: 'off',
          autosuggest: 'off',
          autofill: 'off',
          spellcheck: 'false',
        },
        {
          id: 'ff2',
          name: 'Text area no autocomplete',
          long: true,
          show: true,
          autocomplete: 'off',
          autosuggest: 'off',
          autofill: 'off',
          spellcheck: 'false',
        },
      ]}
      entity={{}}
      submitLabel="Submit"
    />
  ))
  .add('With values', () => (
    <FormBuilder
      formFields={formFields}
      entity={{
        field1: 'test1',
        field2: 'test2',
        field3: 'test3',
        field4: true,
        field5: 'banana',
        field6: 'test5',
      }}
      submitLabel="Submit"
    />
  ))
  .add('With presubmit text', () => (
    <FormBuilder
      formFields={formFields}
      entity={{}}
      submitLabel="Submit"
      presubmitText="By clicking submit, you agree to have your soul split in two."
    />
  ));
