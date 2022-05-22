/* eslint-disable */
import React, { Component } from 'react';

import Select from './index';

class StatefulInput extends Component {
  constructor(props) {
    super(props);

    this.InputComponent = props.component || Input;
    this.state = { value: props.value || '', valid: null, enabled: true };
  }

  render() {
    const { value, component, ...rest } = this.props;
    return (
      <div>
        <this.InputComponent
          name="Stateful_input"
          valid={this.state.valid}
          value={this.state.value}
          enabled={this.state.enabled}
          onChange={(e) => this.setState({ value: e.target.value })}
          {...rest}
        />
        {!this.state.enabled && (
          <button
            onClick={() => {
              this.setState({
                enabled: true,
              });
            }}
          >
            Enable
          </button>
        )}
        {this.state.enabled && (
          <button
            onClick={() => {
              this.setState({
                enabled: false,
              });
            }}
          >
            Disable
          </button>
        )}
        {this.state.valid !== true && (
          <button
            onClick={() => {
              this.setState({
                valid: true,
              });
            }}
          >
            Valid
          </button>
        )}
        {this.state.valid !== false && (
          <button
            onClick={() => {
              this.setState({
                valid: false,
              });
            }}
          >
            Invalid
          </button>
        )}
        {this.state.valid !== null && (
          <button
            onClick={() => {
              this.setState({
                valid: null,
              });
            }}
          >
            Reset validation
          </button>
        )}
        <br />
        <p>Current value: {this.state.value}</p>
      </div>
    );
  }
}

const selectOptions = [
  { value: 'apple', name: 'Apple' },
  { value: 'banana', name: 'Banana' },
  { value: 'cranberry', name: 'Cranberry' },
];

export default { title: 'Sass/Molecules/Select', component: Select };

export const Default = () => <Select value="apple" options={selectOptions} />;
export const Valid = () => (
  <Select value="apple" valid options={selectOptions} />
);
export const Invalid = () => (
  <Select value="apple" valid={false} options={selectOptions} />
);
export const Disabled = () => (
  <Select value="apple" enabled={false} options={selectOptions} />
);
export const WithOther = () => (
  <Select value="other value" options={selectOptions} enableOther />
);
export const Stateful = () => (
  <StatefulInput value="apple" component={Select} options={selectOptions} />
);
export const StatefulWithOther = () => (
  <StatefulInput
    value="apple"
    component={Select}
    options={selectOptions}
    enableOther
  />
);
