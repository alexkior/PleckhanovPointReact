import { combineReducers } from 'redux';
import { shopReducer } from './shop.reducer.js';
import { eventsReducer } from './events.reducer.js';
import { fieldcardsReducer } from './fieldcards.reducer.js';
import { directionLeadersReducer } from './directionleaders.reducer';
import { shopperCardsReducer } from './shoppercards.reducer.js';
import { structurePreviewsReducer } from './structurepreviews.reducer.js';
import { authReducer } from './auth.reducer.js';

export const reducer = combineReducers({
  shopCards: shopReducer,
  eventCards: eventsReducer,
  fieldCards: fieldcardsReducer,
  directionLeaders: directionLeadersReducer,
  shopperCards: shopperCardsReducer,
  structurePreviews: structurePreviewsReducer,
  auth: authReducer
})
