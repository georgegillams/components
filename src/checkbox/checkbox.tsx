import React from 'react';
import PropTypes from 'prop-types';
import withStyledTheme from '../styled-theming';

import {
  Icon,
  Input,
  InputWrapper,
  Label,
  VisibleLabel,
} from './checkbox.styles';

export interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  light?: boolean;
  valid?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  theme?: any;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    onChange,
    name,
    label,
    checked,
    disabled,
    valid,
    inputProps,
    theme,
    ...rest
  } = props;

  const enabled = !disabled;
  const invalid = valid === false;

  return (
    <Label {...rest}>
      <InputWrapper>
        <Input
          aria-invalid={invalid}
          aria-disabled={disabled ? true : undefined}
          aria-label={label}
          name={name}
          type="checkbox"
          checked={checked}
          readOnly={!onChange}
          onChange={enabled ? onChange : undefined}
          disabled={disabled}
          valid={valid}
          {...inputProps}
        />
        <Icon
          checked={checked}
          valid={valid}
          disabled={disabled}
          theme={theme}
        />
      </InputWrapper>
      <VisibleLabel aria-hidden="true" disabled={disabled}>
        {label}
      </VisibleLabel>
    </Label>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  theme: PropTypes.object,
};

Checkbox.defaultProps = {
  onChange: undefined,
  inputProps: {},
  checked: false,
  disabled: false,
  valid: undefined,
  theme: undefined,
};

export default withStyledTheme<CheckboxProps>(Checkbox);

export { Checkbox as CheckboxWithoutTheme };
