import { SET_DIRECTION_LEADERS, SET_LOADING, SET_ERROR } from '../types';

export const directionLeadersReducer = (directionLeaders = {}, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case SET_ERROR: {
      return { directionLeadersList: directionLeaders.directionLeadersList, isLoading: false, error: error };
    }
      
    case SET_LOADING: {
      return { directionLeadersList: directionLeaders.directionLeadersList, isLoading: true, error: null };
    }
      
    case SET_DIRECTION_LEADERS: { 
      const { directionLeaders } = payload;
      return { directionLeadersList: directionLeaders, isLoading: false, error: null };
    }
      
    default:
      return directionLeaders;
  }
}
