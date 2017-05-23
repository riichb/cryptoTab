export default function reducer ( state = {
  coinSelectedName: '',
  coinSelectedValue: null,
  coinSelectedQuantity: null,
  userWallet: []
}, action) {
  switch (action.type) {
    case 'ADD_COIN': {
      return {
        ...state,
        // need to update userWallet
      }
    }
    default:
      return state;
  }
}
