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
  // componentDidMount(event) {
  //   debugger;
  //    const value = parseInt(event.target.value);
  //
  //    this.setState({quantity: value});
  //    this.props.onChange(value);
  //  }

  render() {
    return (
      <input type="number" name="quantity" onChange={this.onInput}/>
    )
  }
}

export default QuantityMultiplier;
