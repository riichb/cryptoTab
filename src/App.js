import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import Calculator from './components/Calculator/Calculator';
import TotalAccountValue from './components/TotalAccountValue/TotalAccountValue';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quantity: '',
      coin: [],
      items: [],
      selectValue: '',
      filteredResults: 0
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

  componentDidMount() {
    fetch(`https://api.coinmarketcap.com/v1/ticker/`)
      .then((result)=> {
         result.json()
       .then(json => {
         this.setState({items: json})
        });
     });
  }

  handleClick(event) {
    const coin = this.state.selectValue;
    const quantity = parseInt(this.state.quantity, 10)
    this.findCoin(coin, quantity);
  }

  findCoin(id) {
    const filtered = this.state.items.filter(currency=> currency.id === id);
    const coinResult = filtered[0].price_usd;
    this.setState({filteredResults: coinResult});
  }

  render() {
    return (
      <div className="App">
        <header>
          <span className="title">CryptoTab</span>
        </header>
        <div className="crypto-calculator">
          <TotalAccountValue
            totalAccountValue={this.state.filteredResults}
          />
          <Calculator/>
          <div className="add-coin-container" >
            <button className="add-coin-button" onClick={this.handleClick}>
              Add Coin
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
