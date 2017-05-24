import React, { Component } from 'react';
import CoinQuantity from '../CoinQuantity/CoinQuantity';
import CoinSearch from '../CoinSearch/CoinSearch';
import MultiplyIcon from './MultiplyIcon'

class CoinMultiplier extends Component {
  render() {
    return (
      <div className="coin-multiplier">
        <CoinSearch/>
        <MultiplyIcon/>
        <CoinQuantity/>
      </div>
    )
  }
}

export default CoinMultiplier;
