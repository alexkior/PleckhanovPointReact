import { SET_FIELD_CARDS, SET_LOADING, SET_ERROR } from '../types';

export const fieldcardsReducer = (fieldCards = {}, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case SET_ERROR: {
      return { fieldCardsList: fieldCards.fieldCardsList, isLoading: false, error: error };
    }
      
    case SET_LOADING: {
      return { fieldCardsList: fieldCards.fieldCardsList, isLoading: true, error: null };
    }
      
    case SET_FIELD_CARDS: {
      const { fieldCards } = payload;
      return { fieldCardsList: fieldCards, isLoading: false, error: null };
    }
  
    default:
      return fieldCards;
  }
}
