import React, { Component } from 'react';
import CoinListHeaders from './CoinListHeaders';
import './CoinList.css';

class CoinList extends Component {
  render() {
          debugger;
    return (
      <div className="coin-list-container">
        <CoinListHeaders/>
        <ul className="coin-list">
          {
            Object.keys(this.props.coins).map(function(key) {
              const coin = this.props.coins[key];
              return (
                <li key={key} className="coin-item">
                  <ul className="coin-info">
                    <li className="coin-name">{coin.id}</li>
                    <li className="coin-owned">{coin.total_quantity}</li>
                    <li className="coin-total-value">${coin.total_value}</li>
                  </ul>
                </li>
              )
            }.bind(this))
          }
        </ul>
      </div>
    )
  }
}

export default CoinList;
