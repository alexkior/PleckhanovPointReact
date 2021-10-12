import {GET_EVENT_CARDS, SET_EVENT_CARDS, SET_LOADING, SET_ERROR } from '../types';

export const getEventCards = () => ({
  type: GET_EVENT_CARDS
})

export const setEventCards = (eventCards) => ({
  type: SET_EVENT_CARDS,
  payload: { eventCards }
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const setError = (error) => ({
  type: SET_ERROR,
  error
})
