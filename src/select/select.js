import React from 'react';
import PropTypes from 'prop-types';

import Input from '../input';

const Select = (props) => {
  const {
    name,
    value,
    onChange,
    enabled,
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

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  'aria-describedby': PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  enabled: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  iconProps: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
  valid: PropTypes.bool,
};

Select.defaultProps = {
  onChange: null,
  name: null,
  value: null,
  id: null,
  'aria-describedby': null,
  enabled: true,
  iconProps: null,
  inputProps: null,
  valid: null,
};

export default Select;
