import { SET_SHOPPER_CARDS, SET_LOADING, SET_ERROR } from '../types';

export const shopperCardsReducer = (shopperCards = {}, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case SET_ERROR: {
      return { shopperCardsList: shopperCards.shopperCardsList, isLoading: false, error: error };
    }
      
    case SET_LOADING: { 
      return {shopperCardsList: shopperCards.shopperCardsList, isLoading: true, error: null}
    }
      
    case SET_SHOPPER_CARDS: {
      const { shopperCards } = payload;
      return { shopperCardsList: shopperCards, isLoading: false, error: null };
    }
  
    default:
      return shopperCards;
  }
}
