import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";
import { GET_AUTH } from "../redux/types";
import {
  setLoading,
  setAuth,
  setError,
} from "../redux/actions/auth.actions.js";

async function checkAuthOnServer() {
  try {
    const responce = await axios.get(`${process.env.REACT_APP_API_URL}/Auth`);
    return responce.data;
  } catch (error) {
    throw Error(error);
  }
}

function* authWorker() {
  try {
    yield put(setLoading());
    const response = yield call(checkAuthOnServer);

    yield put(setAuth(response));
  }
  catch (error) {
    yield put(setError(error));
  }
}

export function* watchAuth() {
  yield takeEvery(GET_AUTH, authWorker);
}
