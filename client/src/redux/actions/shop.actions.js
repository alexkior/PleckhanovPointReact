import {GET_SHOP_CARDS, SET_SHOP_CARDS, SET_LOADING, SET_ERROR } from '../types';

export const getShopCards = () => ({
  type: GET_SHOP_CARDS
})

export const setShopCards = (shopCards) => ({
  type: SET_SHOP_CARDS,
  payload: { shopCards }
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const setError = (error) => ({
  type: SET_ERROR,
  error
})
