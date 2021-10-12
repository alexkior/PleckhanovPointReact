import { GET_SHOPPER_CARDS, SET_SHOPPER_CARDS, SET_LOADING, SET_ERROR } from '../types';

export const getShopperCards = () => ({
  type: GET_SHOPPER_CARDS
})

export const setShopperCards = (shopperCards) => ({
  type: SET_SHOPPER_CARDS,
  payload: {shopperCards}
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const setError = (error) => ({
  type: SET_ERROR,
  error
})
