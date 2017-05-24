import React, { Component } from 'react';

class CoinQuantity extends Component {
  render() {
    return (
      <input className="coin-quantity" type="number" name="quantity" onChange={this.props.handleCoinQuantityChange}/>
    )
  }
}

export default CoinQuantity;
