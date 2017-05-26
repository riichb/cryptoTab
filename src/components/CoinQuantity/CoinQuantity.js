import React, { Component } from 'react';

class CoinQuantity extends Component {
  render() {
    return (
      <input
        className="coin-quantity"
        type="number" name="quantity"
        value={this.props.coinQuantityMultiplier}
        onChange={this.props.handleCoinQuantityChange}
      />
    )
  }
}

export default CoinQuantity;
