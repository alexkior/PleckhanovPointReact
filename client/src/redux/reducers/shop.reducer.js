import { SET_SHOP_CARDS, SET_LOADING, SET_ERROR } from '../types';

export const shopReducer = (shopCards = {}, action) => {
  const { type, payload, error } = action;
  
  switch (type) {
    case SET_ERROR: {
      return { shopList: shopCards.shopList, isLoading: false, error: error };
    }
      
    case SET_LOADING: {
      return { shopList: shopCards.shopList, isLoading: true, error: null };
    }
      
    case SET_SHOP_CARDS: {
      const { shopCards } = payload;
      return { shopList: shopCards, isLoading: false, error: null };
    }
      
  
    default: {
      return shopCards;
    }
  }
}
