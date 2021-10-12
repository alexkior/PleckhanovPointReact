import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { GET_DIRECTION_LEADERS } from "../redux/types";
import {
  setLoading,
  setDirectionLeaders,
  setError,
} from "../redux/actions/directionleaders.actions.js";

async function getDirectionLeadersFromServer() {
  try {
    const responce = await axios.get(
      `${process.env.REACT_APP_API_URL}/DirectionLeaders`
    );
    return responce.data;
  } catch (error) {
    throw Error(error);
  }
}

function* getDirectionLeadersWorker() {
  try {
    yield put(setLoading());
    const responce = yield call(getDirectionLeadersFromServer);

    yield put(setDirectionLeaders(responce));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* watchDirectionLeaders() {
  yield takeEvery(GET_DIRECTION_LEADERS, getDirectionLeadersWorker);
}
