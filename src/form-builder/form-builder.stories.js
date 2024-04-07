import React, { useState } from 'react';

import FormBuilder, { FORM_FIELD_VISIBILITY } from './index';

const selectOptions = [
  { value: 'apple', name: 'Apple' },
  { value: 'banana', name: 'Banana' },
  { value: 'cranberry', name: 'Cranberry' },
];

const formFields = [
  { id: 'field1', name: 'Field 1', validationRegex: null },
  { id: 'field2', name: 'Field 2', validationRegex: null },
  { id: 'field3', name: 'Field 3', validationRegex: null },
  {
    id: 'field4',
    name: 'Field 4',
    validationRegex: null,
    type: 'CHECKBOX',
  },
  {
    id: 'field5',
    name: 'Field 5',
    validationRegex: null,
    type: 'SELECT',
    options: selectOptions,
  },
  {
    id: 'field6',
    name: 'Field 6',
    validationRegex: null,
    long: true,
  },
];

const formFieldsWithHints = formFields.map((f) => ({
  ...f,
  hint: `Hint for ${f.name}`,
}));

const StatefulFormBuilder = (props) => {
  const [entity, setEntity] = useState({});

  return <FormBuilder entity={entity} onDataChanged={setEntity} {...props} />;
};

export default {
  title: 'Organisms/Form builder',
  component: FormBuilder,
};

export const Default = () => (
  <FormBuilder formFields={formFields} entity={{}} submitLabel="Submit" />
);

export const NoAutocomplete = () => (
  <FormBuilder
    formFields={[
      {
        id: 'ff1',
        name: 'Input no autocomplete',
        inputProps: {
          autocomplete: 'off',
          autosuggest: 'off',
          autofill: 'off',
          spellcheck: 'false',
        },
      },
      {
        id: 'ff2',
        name: 'Text area no autocomplete',
        long: true,
        inputProps: {
          autocomplete: 'off',
          autosuggest: 'off',
          autofill: 'off',
          spellcheck: 'false',
        },
      },
    ]}
    entity={{}}
    submitLabel="Submit"
  />
);

export const HiddenFields = () => (
  <FormBuilder
    formFields={[
      {
        id: 'ff1',
        name: 'Input — visibility off',
        visibility: FORM_FIELD_VISIBILITY.OFF,
        inputProps: {
          autocomplete: 'off',
          autosuggest: 'off',
          autofill: 'off',
          spellcheck: 'false',
        },
      },
      {
        id: 'ff2',
        name: 'Input — visually hidden',
        long: true,
        visibility: FORM_FIELD_VISIBILITY.VISUALLY_HIDDEN,
        inputProps: {
          autocomplete: 'off',
          autosuggest: 'off',
          autofill: 'off',
          spellcheck: 'false',
        },
      },
    ]}
    entity={{}}
    submitLabel="Submit"
  />
);

export const WithValues = () => (
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
);

export const WithPreSubmitText = () => (
  <FormBuilder
    formFields={formFields}
    entity={{}}
    submitLabel="Submit"
    preSubmitText="By clicking submit, you agree to have your soul split in two."
  />
);
WithPreSubmitText.storyName = 'With pre-submit text';

export const WithHints = () => (
  <FormBuilder
    formFields={formFieldsWithHints}
    entity={{}}
    submitLabel="Submit"
    preSubmitText="By clicking submit, you agree to have your soul split in two."
  />
);

export const Stateful = () => (
  <StatefulFormBuilder formFields={formFields} submitLabel="Submit" />
);

export const LoginTestUname = () => (
  <StatefulFormBuilder
    formFields={[
      {
        id: 'email',
        name: 'Email',
        inputProps: {
          type: 'email',
          spellCheck: 'false',
          autofill: 'username',
          autocomplete: 'username',
        },
      },
    ]}
    submitLabel="Submit"
  />
);

export const LoginTestUnameAndPassword = () => (
  <StatefulFormBuilder
    formFields={[
      {
        id: 'email',
        name: 'Email',
        inputProps: {
          type: 'email',
          spellCheck: 'false',
          autofill: 'username',
          autocomplete: 'username',
        },
      },
      {
        id: 'password',
        name: 'Password',
        inputProps: {
          type: 'password',
          spellCheck: 'false',
          autofill: 'current-password',
          autocomplete: 'current-password',
        },
      },
    ]}
    submitLabel="Submit"
  />
);

export const LoginTestUnameAndPasswordVisuallyHidden = () => (
  <StatefulFormBuilder
    formFields={[
      {
        id: 'email',
        name: 'Email',
        inputProps: {
          type: 'email',
          spellCheck: 'false',
          autofill: 'username',
          autocomplete: 'username',
        },
      },
      {
        id: 'password',
        name: 'Password',
        visibility: FORM_FIELD_VISIBILITY.VISUALLY_HIDDEN,
        inputProps: {
          type: 'password',
          spellCheck: 'false',
          autofill: 'current-password',
          autocomplete: 'current-password',
        },
      },
    ]}
    submitLabel="Submit"
  />
);
