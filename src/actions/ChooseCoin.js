const CHOOSE_COIN = 'CHOOSE_COIN';

export function chooseCoin(coinType) {
  return {
    type: CHOOSE_COIN,
    coinType: coinType
  }
}
