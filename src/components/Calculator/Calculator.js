import React, { Component } from 'react';
import CoinSearch from '../CoinSearch/CoinSearch';
import QuantityMultiplier from '../QuantityMultiplier/QuantityMultiplier'

class Calculator extends Component {

  render() {
    return (
      <ul className="multiplier">
        <li><CoinSearch/></li>
        <li>X</li>
        <li><QuantityMultiplier/></li>
      </ul>
    )
  }
}

export default Calculator;
