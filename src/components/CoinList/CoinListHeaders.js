import React, { Component } from 'react';
import './CoinList.css';

class CoinListHeaders extends Component {
  render() {
    return (
      <header>
        <ul className="coin-list-header">
          <li>Coin</li>
          <li>Quantity</li>
          <li>Value</li>
        </ul>
      </header>
    )
  }
}

export default CoinListHeaders;
