import { GET_FIELD_CARDS, SET_FIELD_CARDS, SET_LOADING, SET_ERROR } from '../types';

export const getFieldCards = () => ({
  type: GET_FIELD_CARDS
})

export const setFieldCards = (fieldCards) => ({
  type: SET_FIELD_CARDS,
  payload: {fieldCards}
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const setError = (error) => ({
  type: SET_ERROR,
  error
})
