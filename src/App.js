import React, { Component } from 'react';
import CoinMultiplier from './components/CoinMultiplier/CoinMultiplier';
import CoinList from './components/CoinList/CoinList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinsArray: [],
      coinQuantityMultiplier: '',
      coinPrice: '',
      coinSelected: '',
      coinSelectedObject: '',
      finalWalletValue: ''
    };

    this.handleAddingCoin = this.handleAddingCoin.bind(this);
    this.handleCoinQuantityChange = this.handleCoinQuantityChange.bind(this);
    this.handleCoinSelectionChange= this.handleCoinSelectionChange.bind(this);
  }

  handleCoinQuantityChange(e) {
    let quantity = Number(e.target.value);
    this.setState({
      coinQuantityMultiplier: quantity,
    });

  }

  handleAddingCoin(event) {
    this._handleMultiplication();
    this.setState({
      coinsArray: this.state.coinsArray,
    }, this.setState({
      coinQuantityMultiplier: '',
      coinSelected: '',
      coinPrice: ''
    }));

  }

  _handleMultiplication() {
    const coinSelectedObj = this.state.coinSelectedObject
    const price = this.state.coinPrice;
    const quantity = this.state.coinQuantityMultiplier;
    const multipliedPrice = price * quantity;
    // eslint-disable-next-line
    const walletValue = Number(this.state.finalWalletValue.replace(/\,/g,'')) + multipliedPrice;
    const finalWalletValue = this._addCommasForLargeNumbers(walletValue.toFixed(3))
    const totalPrice = this._addCommasForLargeNumbers(multipliedPrice.toFixed(3));

    Object.assign(coinSelectedObj, {
      total_quantity: quantity,
      total_value: totalPrice
    });

    this.state.coinsArray.push(coinSelectedObj);

    this.setState( {
      finalWalletValue: finalWalletValue
    })
  }

  _addCommasForLargeNumbers(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join(".");
  }

  handleCoinSelectionChange(coin) {
    debugger;
    const coinPrice = Number(coin.price_usd);
    const coinSelected = coin.value;
    const coinObject = coin;

    this.setState({
      coinSelectedObject: coinObject,
      coinPrice: coinPrice,
      coinSelected: coinSelected,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="title-header">
          <span className="title">CryptoTab</span>
        </header>
        <div className="main-container">
          <div className="calculator">
            <div className="account-value">
              ${this.state.finalWalletValue}
            </div>
            <div className="crypto-input">
              <CoinMultiplier
                coinQuantityMultiplier={this.state.coinQuantityMultiplier}
                handleCoinQuantityChange={this.handleCoinQuantityChange}
                handleCoinSelectionChange={this.handleCoinSelectionChange}
                coinPrice={this.state.coinPrice}
                coinSelected={this.state.coinSelected}
              />
            <div className="add-coin-container" >
              <button className="add-coin-button" onClick={this.handleAddingCoin}>
                Add Coin
              </button>
            </div>
          </div>
        </div>

      <CoinList
        coins={this.state.coinsArray}
      />
          </div>
      </div>
    );
  }
}

export default App;
