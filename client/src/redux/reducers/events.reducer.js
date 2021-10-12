import { SET_EVENT_CARDS, SET_LOADING, SET_ERROR } from '../types';

export const eventsReducer = (eventCards = {}, action) => {
  const { type, payload, error } = action;
  
  switch (type) {
    case SET_ERROR: {
      return { eventList: eventCards.eventList, isLoading: false, error: error };
    }
      
    case SET_LOADING: {
      return { eventList: eventCards.eventList, isLoading: true, error: null };
    }
      
    case SET_EVENT_CARDS: {
      const { eventCards } = payload;
      return { eventList: eventCards, isLoading: false, error: null };
    }
      
    default: {
      return eventCards;
    }
  }
}
