/* eslint-disable */
import React, { Component } from 'react';

import TextArea from './index';

class StatefulTextArea extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value || '', valid: null, enabled: true };
  }

  render() {
    const { value, ...rest } = this.props;
    return (
      <div>
        <TextArea
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

export default {
  title: 'Atoms/Text area',
  component: TextArea,
};

export const Default = () => <TextArea value="Test" />;
export const Valid = () => <TextArea value="Test" valid />;
export const Invalid = () => <TextArea value="Test" valid={false} />;
export const Disabled = () => <TextArea value="Test" enabled={false} />;
export const Stateful = () => <StatefulTextArea />;
