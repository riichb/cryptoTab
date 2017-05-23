import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// add actions below
import * as calculatorActions from '../actions/calculatorActions.js';

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

const mapStateToProps = ({ coinWallet }) => {
  const { quantityMultiplier } = coinWallet;

  return {
    quantityMultiplier
  };
};

// Added this to prebundle before it's needed
const bundledActionCreators = Object.assign({}, calculatorActions);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(bundledActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantityMultiplier);
