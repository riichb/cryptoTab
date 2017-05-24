import React, { Component } from 'react';
import CoinMultiplier from './components/CoinMultiplier/CoinMultiplier';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: '',
      filteredResults: [0]
    };

     this.handleChange = this.handleChange.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
     const value = event.target.value;

     this.setState({
       quantity: value
     });
   }


  handleChange(event) {
    const selectedCoinName = event.value;
    this.setState({
      selectValue: selectedCoinName
    });
  }

  handleClick(event) {
    const coin = this.state.selectValue;
    const quantity = parseInt(this.state.quantity, 10)
    this.findCoin(coin, quantity);
  }

  findCoin(id, quantity) {
    const filtered = this.state.items.filter(currency=> currency.id === id);
    const coinResult = filtered[0].price_usd * quantity;
    this.setState({filteredResults: coinResult});
  }

  render() {
    return (
      <div className="App">
        <header>
          <span className="title">CryptoTab</span>
        </header>
        <div className="account-value">
          ${this.state.filteredResults}
        </div>
        <div className="crypto-calculator">
          <CoinMultiplier/>
          <div className="add-coin-container" >
            <button className="add-coin-button" onClick={this.handleClick}>
              Add Coin
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
