export function changeQuantityMultiplier (newQuantity) {
  return {
    type: 'CHANGE_QUANTITY_MULTIPLIER',
    payload: newQuantity
  }
}
