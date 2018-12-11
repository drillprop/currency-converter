import React, { Component } from 'react';

class Currency extends Component {
  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value: value * 4.2 });
  };

  render() {
    const { children, amount } = this.props;
    return children(amount);
  }
}

export default Currency;
