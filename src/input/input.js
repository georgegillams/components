import React from 'react';
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

const Input = (props) => {
  const {
    name,
    value,
    onChange,
    enabled,
    type,
    valid,
    inputProps,
    iconProps,
    component: InputComponent,
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
        onChange={enabled ? onChange : null}
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

Input.propTypes = {
  id: PropTypes.string,
  'aria-describedby': PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  component: PropTypes.func,
  enabled: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  iconProps: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
  type: PropTypes.string,
  valid: PropTypes.bool,
};

Input.defaultProps = {
  id: null,
  'aria-describedby': null,
  value: null,
  name: null,
  onChange: null,
  component: (props) => <input {...props} />,
  enabled: true,
  iconProps: null,
  inputProps: null,
  type: null,
  valid: null,
};

export default Input;
