import React, { ComponentType, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

// TODO: can we use react's useMemo for this?
import memoize from 'lodash.memoize';

import Tick from '../icon/tick';
import ExclamationCircle from '../icon/exclamation-circle';
import {
  InputWrapper,
  styleIconComponent,
  styleInputComponent,
} from './input.styles';

const styleInputComponentMemoized = memoize(styleInputComponent);
const styleIconComponentMemoized = memoize(styleIconComponent);

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: string;
  enabled?: boolean;
  type?: string;
  valid?: boolean;
  inputProps?: any;
  iconProps?: any;
  component?: ComponentType;
}

const DefaultInputComponent = (props: InputProps) => <input {...props} />;

const Input = (props: InputProps) => {
  const {
    name,
    value,
    onChange,
    enabled = true,
    type,
    valid,
    inputProps,
    iconProps,
    component: InputComponent = DefaultInputComponent,
    id,
    'aria-describedby': ariaDescribedby,
    children,
    ...rest
  } = props;

  const StyledInputComponent = styleInputComponentMemoized(InputComponent);

  const disabled = enabled === false;
  const invalid = valid === false;

  let IconComponent = null;
  if (valid && enabled) {
    IconComponent = Tick;
  }
  if (valid === false && enabled) {
    IconComponent = ExclamationCircle;
  }

  const StyledIconComponent = IconComponent
    ? styleIconComponentMemoized(IconComponent)
    : null;

  return (
    <InputWrapper disabled={disabled} {...rest}>
      <StyledInputComponent
        aria-invalid={invalid}
        aria-disabled={disabled}
        value={value || ''}
        type={type}
        name={name}
        disabled={disabled}
        readOnly={!onChange}
        onChange={enabled ? onChange : undefined}
        id={id}
        aria-describedby={ariaDescribedby}
        {...inputProps}
      >
        {children}
      </StyledInputComponent>
      {StyledIconComponent && (
        <StyledIconComponent valid={valid} {...iconProps} />
      )}
    </InputWrapper>
  );
};

export default Input;
