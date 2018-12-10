import React, { Component } from 'react';

class Currency extends Component {
  state = {
    value: 0
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value: value * 4.2 });
  };

  render() {
    const { children } = this.props;
    const { value } = this.state;
    return children(this.handleChange, value);
  }
}

export default Currency;
