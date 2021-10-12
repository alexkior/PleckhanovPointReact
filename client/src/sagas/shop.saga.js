import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_SHOP_CARDS } from '../redux/types';
import { setLoading, setShopCards, setError} from '../redux/actions/shop.actions.js';

async function getShopCardsFromServer() {
  try {
    const responce = await axios.get(`${process.env.REACT_APP_API_URL}/Shop`);
    return responce.data;
    // console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<',responce.data);
    
  } catch (error) {
    throw Error(error);
  }
}

function* getShopCardsWorker() {
  try {
    yield put(setLoading());
    const responce = yield call(getShopCardsFromServer);

    yield put(setShopCards(responce));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* watchShop() {
  yield takeEvery(GET_SHOP_CARDS, getShopCardsWorker);
}
