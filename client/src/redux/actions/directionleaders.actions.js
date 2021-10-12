import { GET_DIRECTION_LEADERS, SET_DIRECTION_LEADERS, SET_LOADING, SET_ERROR } from '../types';

export const getDirectionLeaders = () => ({
  type: GET_DIRECTION_LEADERS
})

export const setDirectionLeaders = (directionLeaders) => ({
  type: SET_DIRECTION_LEADERS,
  payload: {directionLeaders}
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const setError = (error) => ({
  type: SET_ERROR,
  error
})
