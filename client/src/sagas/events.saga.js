import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_EVENT_CARDS } from '../redux/types';
import { setLoading, setEventCards, setError} from '../redux/actions/events.actions.js';

async function getEventCardsFromServer() {
  try {
    const responce = await axios.get(`${process.env.REACT_APP_API_URL}/Events`);
    return responce.data;
    // console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<',responce.data);
    
  } catch (error) {
    throw Error(error);
  }
}

function* getEventCardsWorker() {
  try {
    yield put(setLoading());
    const responce = yield call(getEventCardsFromServer);

    yield put(setEventCards(responce));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* watchEvents() {
  yield takeEvery(GET_EVENT_CARDS, getEventCardsWorker);
}
