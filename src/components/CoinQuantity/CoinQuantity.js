import React, { Component } from 'react';

class CoinQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity,
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput() {
    this.setState({
    })
  }

  render() {
    return (
      <input className="coin-quantity" type="number" name="quantity" onChange={this.onInput}/>
    )
  }
}

export default CoinQuantity;
