import React, { Component } from 'react';
import CoinQuantity from '../CoinQuantity/CoinQuantity';
import CoinSearch from '../CoinSearch/CoinSearch';
import MultiplyIcon from './MultiplyIcon'

class CoinMultiplier extends Component {

  render() {
    return (
      <div className="coin-multiplier">
        <CoinSearch
          coinSelected={this.props.coinSelected}
          coinPrice={this.props.coinPrice}
          handleCoinSelectionChange={this.props.handleCoinSelectionChange}
        />
        <MultiplyIcon/>
        <CoinQuantity
          coinQuantityMultiplier={this.props.coinQuantityMultiplier}
          handleCoinQuantityChange={this.props.handleCoinQuantityChange}
        />
      </div>
    )
  }
}

export default CoinMultiplier;
