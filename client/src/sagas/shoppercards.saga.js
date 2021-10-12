import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_SHOPPER_CARDS } from '../redux/types';
import { setLoading, setShopperCards, setError} from '../redux/actions/shoppercards.actions.js';

async function getShopperCardsFromServer() {
  try {
    const responce = await axios.get(`${process.env.REACT_APP_API_URL}/ShopperCards`);
    return responce.data;
  } catch (error) {
    throw Error(error);
  }  
}

function* getShopperCardsWorker() {
  try {
    yield put(setLoading());
    const responce = yield call(getShopperCardsFromServer);

    yield put(setShopperCards(responce));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* watchShopperCards() {
  yield takeEvery(GET_SHOPPER_CARDS, getShopperCardsWorker);
}
