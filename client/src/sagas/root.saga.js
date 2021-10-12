import { all } from 'redux-saga/effects';
import { watchAuth } from './auth.saga.js';
import { watchFieldCards } from './fieldcards.saga.js';
import { watchDirectionLeaders } from './directionleaders.saga.js';
import { watchShopperCards } from './shoppercards.saga.js';
import { watchStructurePreviews } from './structurepreviews.saga.js';
import { watchShop } from './shop.saga.js';
import { watchEvents } from './events.saga.js';

export default function* rootSaga() {
  yield all([watchAuth(), watchFieldCards(), watchDirectionLeaders(), watchShopperCards(), watchStructurePreviews(), watchShop(), watchEvents()]);
}
