import React, { Component } from 'react';

class QuantityMultiplier extends Component {
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

  handleInputChange(event) {
    //  const value = event.target.value;
    //  this.setState({
    //    quantity: value
    //  });
   }

  render() {
    return (
      <label>
        <input className="quantity" type="number" name="quantity" onChange={this.handleInputChange}/>
      </label>
    )
  }
}

export default QuantityMultiplier;
