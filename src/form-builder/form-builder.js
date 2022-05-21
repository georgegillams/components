import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import Input from '../input';
import TextArea from '../text-area';
import Select from '../select';
import Checkbox from '../checkbox';
import { cssModules } from '../helpers/cssModules';
import { formValueChanged } from '../helpers/objects';
import HelperFunctions from '../helpers/helper-functions';

import STYLES from './forms.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const FormBuilder = (props) => {
  const [formId] = props.test
    ? ['FORM_ID']
    : useState(Math.random().toString(36).substring(7));

  const {
    className,
    centered,
    disabled: disabledProp,
    loading,
    entity,
    onDataChanged,
    submitOnChange,
    onSubmit,
    preSubmitText,
    submitLabel,
    formFields,
    test,
    ...rest
  } = props;

  const disabled = disabledProp || loading;

  const classNameFinal = [];
  if (className) classNameFinal.push(className);

  const validity = [];
  for (let i = 0; i < formFields.length; i += 1) {
    const field = formFields[i];
    const fieldId = field.id;
    const fieldRegex = field.validationRegex;
    validity[i] =
      !(entity[fieldId] && entity[fieldId].match) ||
      (!!entity[fieldId] && !!entity[fieldId].match(fieldRegex));
  }

  const filteredFormFields = formFields.filter(
    (field) =>
      HelperFunctions.includes(Object.keys(field), 'show') && field.show,
  );

  return (
    <div className={classNameFinal.join(' ')} {...rest}>
      {filteredFormFields.map((formField, index) => {
        const label = (
          <label
            htmlFor={`${formField.id}_${formId}`}
            className={getClassName(
              'forms__component',
              'forms__component__label',
            )}
          >
            {formField.name}
          </label>
        );
        const hint = formField.hint ? (
          <p
            id={`hint_${formField.id}_${formId}`}
            className={getClassName(
              'forms__component',
              'forms__component__hint',
            )}
          >
            {formField.hint}
          </p>
        ) : null;

        return (
          <Fragment key={`${formField.id}_${formId}`}>
            {formField.type === 'CHECKBOX' && (
              <>
                <Checkbox
                  id={`${formField.id}_${formId}`}
                  className={getClassName('forms__component')}
                  name={formField.name}
                  label={formField.name}
                  checked={entity[formField.id]}
                  onChange={(event) => {
                    formValueChanged(
                      entity,
                      formField.id,
                      event,
                      onDataChanged,
                      submitOnChange ? onSubmit : null,
                    );
                  }}
                  disabled={formField.disabled}
                />
              </>
            )}
            {!formField.long &&
              formField.type !== 'CHECKBOX' &&
              formField.type !== 'SELECT' && (
                <>
                  {label}
                  {hint && hint}
                  <Input
                    id={`${formField.id}_${formId}`}
                    aria-describedby={
                      hint ? `hint_${formField.id}_${formId}` : null
                    }
                    className={getClassName(
                      'forms__component',
                      'forms__component__text-box',
                    )}
                    name={formField.name}
                    value={entity[formField.id]}
                    valid={validity[index]}
                    type={formField.type === 'password' ? 'password' : null}
                    onChange={(event) => {
                      formValueChanged(
                        entity,
                        formField.id,
                        event,
                        onDataChanged,
                        submitOnChange ? onSubmit : null,
                      );
                    }}
                    inputProps={formField.inputProps}
                    disabled={formField.disabled}
                    placeholder={formField.name}
                  />
                </>
              )}
            {formField.long &&
              formField.type !== 'CHECKBOX' &&
              formField.type !== 'SELECT' && (
                <>
                  {label}
                  {hint && hint}
                  <TextArea
                    id={`${formField.id}_${formId}`}
                    aria-describedby={
                      hint ? `hint_${formField.id}_${formId}` : null
                    }
                    className={getClassName(
                      'forms__component',
                      'forms__component__text-box',
                    )}
                    name={formField.name}
                    value={entity[formField.id]}
                    valid={validity[index]}
                    onChange={(event) => {
                      formValueChanged(
                        entity,
                        formField.id,
                        event,
                        onDataChanged,
                        submitOnChange ? onSubmit : null,
                      );
                    }}
                    inputProps={formField.inputProps}
                    disabled={formField.disabled}
                    placeholder={formField.name}
                  />
                </>
              )}
            {formField.type === 'SELECT' && (
              <>
                {label}
                {hint && hint}
                <Select
                  id={`${formField.id}_${formId}`}
                  aria-describedby={
                    hint ? `hint_${formField.id}_${formId}` : null
                  }
                  className={getClassName(
                    'forms__component',
                    'forms__component__text-box',
                  )}
                  renderOtherLabel={() => (
                    <label
                      htmlFor={`${formField.id}_${formId}_other`}
                      className={getClassName(
                        'forms__component',
                        'forms__component__label',
                      )}
                    >
                      {formField.name} - other
                    </label>
                  )}
                  otherInputId={`${formField.id}_${formId}_other`}
                  name={formField.name}
                  value={entity[formField.id]}
                  valid={validity[index]}
                  onChange={(event) => {
                    formValueChanged(
                      entity,
                      formField.id,
                      event,
                      onDataChanged,
                      submitOnChange ? onSubmit : null,
                    );
                  }}
                  options={formField.options}
                  enableOther={formField.enableOther}
                  disabled={formField.disabled}
                  placeholder={formField.name}
                />
              </>
            )}
          </Fragment>
        );
      })}
      {preSubmitText && (
        <>
          <div className={getClassName('forms__component')}>
            {preSubmitText}
          </div>
        </>
      )}
      {!submitOnChange && (
        <Button
          className={getClassName(
            'forms__component',
            'forms__component__button',
          )}
          onClick={onSubmit}
          disabled={disabled || !validity.every((v) => v)}
          loading={loading}
        >
          {submitLabel}
        </Button>
      )}
    </div>
  );
};

FormBuilder.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  entity: PropTypes.object.isRequired,
  onDataChanged: PropTypes.func,
  onSubmit: PropTypes.func,
  submitLabel: PropTypes.string.isRequired,
  preSubmitText: PropTypes.string,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitOnChange: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  centered: PropTypes.bool,
  test: PropTypes.bool,
  className: PropTypes.string,
};

FormBuilder.defaultProps = {
  className: null,
  onSubmit: null,
  onDataChanged: null,
  submitOnChange: false,
  disabled: false,
  loading: false,
  centered: false,
  test: false,
  preSubmitText: null,
};

export default FormBuilder;
