import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './App.css';

const getOptions = (input) => {
  return fetch(`https://api.coinmarketcap.com/v1/ticker/`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      json.forEach(function(obj) {
        var coinName = obj.id;
        obj.value = obj.id;
        obj.label = coinName.charAt(0).toUpperCase() + coinName.slice(1);
        obj.clearableValue = false;
      });
      return  { options: json }  ;
    });
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      quantity: '',
      coin: [],
      items: [],
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
          <div className="account-value">
            ${this.state.filteredResults}
          </div>
          <ul className="multiplier">
            <li>
              <Select.Async
                name="form-field-name"
                loadOptions={getOptions}
                onChange={this.handleChange}
                value={this.state.selectValue}
              />
            </li>
            <li>
              X
            </li>
            <li>
              <label>
                <input className="quantity" type="number" name="quantity" onChange={this.handleInputChange}/>
              </label>
            </li>
          </ul>
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
