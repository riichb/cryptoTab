import React, { Component } from 'react';

class TotalAccountValue extends Component {

  render() {
    return (
      <div className="account-value">
        ${this.props.totalAccountValue}
      </div>
    )
  }
}

export default TotalAccountValue;
