import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const getOptions = (input) => {
  return fetch(`https://api.coinmarketcap.com/v1/ticker/`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      json.forEach(function(obj) {
        var coinName = obj.id;
        obj.value = obj.id;
        obj.label = coinName.charAt(0).toUpperCase() + coinName.slice(1);
      });
      return  { options: json }  ;
    });
}

class CoinSearch extends Component {
  render() {
    let coinPrice = this.props.coinPrice;
    let currentPrice = null;

    if (coinPrice) {
      currentPrice = <span className="current-price">${this.props.coinPrice}</span>
    }

    return (
      <div>
        <Select.Async
          name="form-field-name"
          loadOptions={getOptions}
          onChange={this.props.handleCoinSelectionChange}
          value={this.props.coinSelected}
        />
        {currentPrice}
      </div>
    )
  }
}

export default CoinSearch;
