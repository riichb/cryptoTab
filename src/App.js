import React, { Component } from 'react';
import CoinMultiplier from './components/CoinMultiplier/CoinMultiplier';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinQuantityMultiplier: null,
      coinPrice: '',
      coinSelected: '',
      totalValue: [0]
    };

    this.handleCoinMultiplication = this.handleCoinMultiplication.bind(this);
    this.handleCoinQuantityChange = this.handleCoinQuantityChange.bind(this);
    this.handleCoinSelectionChange= this.handleCoinSelectionChange.bind(this);
  }

  handleCoinQuantityChange(e) {
    let quantity = Number(e.target.value);
    this.setState({
      coinQuantityMultiplier: quantity,
    });

  }

  handleCoinMultiplication(event) {
    const price = this.state.coinPrice;
    const quantity = this.state.coinQuantityMultiplier;
    const multipliedPrice = price * quantity;
    const totalPrice = this._addCommasForLargeNumbers(multipliedPrice);

    this.setState( {
      totalValue: totalPrice
    })
  }

  _addCommasForLargeNumbers(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join(".");
  }

  handleCoinSelectionChange(coin) {
    const coinPrice = Number(coin.price_usd);
    const coinSelected = coin.value;

    this.setState({
      coinPrice: coinPrice,
      coinSelected: coinSelected,
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <span className="title">CryptoTab</span>
        </header>
        <div className="account-value">
          ${this.state.totalValue}
        </div>
        <div className="crypto-calculator">
          <CoinMultiplier
            handleCoinQuantityChange={this.handleCoinQuantityChange}
            handleCoinSelectionChange={this.handleCoinSelectionChange}
            coinPrice={this.state.coinPrice}
            coinSelected={this.state.coinSelected}
          />
          <div className="add-coin-container" >
            <button className="add-coin-button" onClick={this.handleCoinMultiplication}>
              Add Coin
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
