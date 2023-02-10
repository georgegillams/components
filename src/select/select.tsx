import React from 'react';

import Input, { InputProps } from '../input';

export interface SelectProps extends InputProps {
  options: Array<{
    name: string;
    value: string;
  }>;
}

const Select = (props: SelectProps) => {
  const {
    name,
    value,
    onChange,
    enabled = true,
    valid,
    inputProps,
    id,
    'aria-describedby': ariaDescribedBy,
    iconProps,
    options,
    ...rest
  } = props;

  return (
    <div {...rest}>
      <Input
        component={(p) => <select {...p} />}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        aria-describedby={ariaDescribedBy}
        valid={valid}
        enabled={enabled}
        iconProps={iconProps}
        {...inputProps}
      >
        {options &&
          options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.name}
            </option>
          ))}
      </Input>
    </div>
  );
};

export default Select;
