import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_FIELD_CARDS } from '../redux/types';
import { setLoading, setFieldCards, setError} from '../redux/actions/fieldcards.actions.js';

async function getFieldCardsFromServer() {
  try {
    const responce = await axios.get(`${process.env.REACT_APP_API_URL}/FieldCards`);
    return responce.data;
  } catch (error) {
    throw Error(error);
  }
}

function* getFieldCardsWorker() {
  try {
    yield put(setLoading());
    const responce = yield call(getFieldCardsFromServer);

    yield put(setFieldCards(responce));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* watchFieldCards() {
  yield takeEvery(GET_FIELD_CARDS, getFieldCardsWorker);
}
