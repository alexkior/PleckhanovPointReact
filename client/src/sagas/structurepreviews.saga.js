import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_STRUCTURE_PREVIEWS } from '../redux/types';
import { setLoading, setStructurePreviews, setError} from '../redux/actions/structurepreviews.actions.js';

async function getStructurePreviewsFromServer() {
  try {
    const responce = await axios.get(`${process.env.REACT_APP_API_URL}/StructurePreviews`);
    return responce.data;
  } catch (error) {
    throw Error(error);
  }
}

function* getStructurePreviewsWorker() {
  try {
    yield put(setLoading());
    const responce = yield call(getStructurePreviewsFromServer);

    yield put(setStructurePreviews(responce));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* watchStructurePreviews() {
  yield takeEvery(GET_STRUCTURE_PREVIEWS, getStructurePreviewsWorker);
}
