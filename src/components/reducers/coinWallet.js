export default function reducer ( state = {
  coinSelectedName: '',
  coinSelectedValue: null,
  coinQuantityMultiplier: null,
  userWallet: []
}, action) {
  switch (action.type) {
    case 'ADD_COIN': {
      return {
        ...state,
        // need to update userWallet
      }
    }
    case 'CHANGE_QUANTITY_MULTIPLIER': {
      console.log('Quantity Multiplier Updating');
      return {
        ...state,
        coinQuantityMultiplier: action.payload
      }
    }
    default:
      return state;
  }
}
