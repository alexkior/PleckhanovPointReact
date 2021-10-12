import { GET_AUTH, SET_AUTH, LOG_OUT, SET_LOADING, SET_ERROR } from "../types";

export const getAuth = () => ({
  type: GET_AUTH
});

export const setAuth = (users) => ({
  type: SET_AUTH,
  payload: { users },
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error
});
