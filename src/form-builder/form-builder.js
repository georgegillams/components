import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { formValueChanged } from '../helpers/objects';
import HelperFunctions from '../helpers/helper-functions';
import {
  FieldWrapper,
  PreSubmitText,
  StyledButton,
  StyledCheckbox,
  StyledHint,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTextArea,
  Wrapper,
} from './form-builder.styles';
import { FORM_FIELD_VISIBILITY } from './constants';

const FormBuilder = (props) => {
  const [formId] = useState(
    props.test ? 'FORM_ID' : Math.random().toString(36).substring(7),
  );

  const {
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
    (field) => field.visibility !== FORM_FIELD_VISIBILITY.OFF,
  );

  return (
    <Wrapper {...rest}>
      {filteredFormFields.map((formField, index) => {
        const label = (
          <StyledLabel htmlFor={`${formField.id}_${formId}`}>
            {formField.name}
          </StyledLabel>
        );
        const hint = formField.hint ? (
          <StyledHint id={`hint_${formField.id}_${formId}`}>
            {formField.hint}
          </StyledHint>
        ) : null;

        const visuallyHidden =
          formField.visibility === FORM_FIELD_VISIBILITY.VISUALLY_HIDDEN;

        return (
          <FieldWrapper
            key={`${formField.id}_${formId}`}
            visuallyHidden={visuallyHidden}
            aria-hidden={visuallyHidden}
          >
            {formField.type === 'CHECKBOX' && (
              <>
                <StyledCheckbox
                  id={`${formField.id}_${formId}`}
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
                  <StyledInput
                    id={`${formField.id}_${formId}`}
                    aria-describedby={
                      hint ? `hint_${formField.id}_${formId}` : null
                    }
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
                    inputProps={{
                      ...formField.inputProps,
                      'aria-hidden': visuallyHidden,
                      // Note: iOS autofill will only work here if the password field is tabbable
                      // tabIndex: visuallyHidden ? '-1' : undefined,
                    }}
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
                  <StyledTextArea
                    id={`${formField.id}_${formId}`}
                    aria-describedby={
                      hint ? `hint_${formField.id}_${formId}` : null
                    }
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
                    inputProps={{
                      ...formField.inputProps,
                      'aria-hidden': visuallyHidden,
                      // Note: iOS autofill will only work here if the password field is tabbable
                      // tabIndex: visuallyHidden ? '-1' : undefined,
                    }}
                    disabled={formField.disabled}
                    placeholder={formField.name}
                  />
                </>
              )}
            {formField.type === 'SELECT' && (
              <>
                {label}
                {hint && hint}
                <StyledSelect
                  id={`${formField.id}_${formId}`}
                  aria-describedby={
                    hint ? `hint_${formField.id}_${formId}` : null
                  }
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
                  disabled={formField.disabled}
                  placeholder={formField.name}
                />
              </>
            )}
          </FieldWrapper>
        );
      })}
      {preSubmitText && (
        <>
          <PreSubmitText>{preSubmitText}</PreSubmitText>
        </>
      )}
      {!submitOnChange && (
        <StyledButton
          onClick={onSubmit}
          disabled={disabled || !validity.every((v) => v)}
          loading={loading}
        >
          {submitLabel}
        </StyledButton>
      )}
    </Wrapper>
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
};

FormBuilder.defaultProps = {
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
