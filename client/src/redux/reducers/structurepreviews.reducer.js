import { SET_STRUCTURE_PREVIEWS, SET_LOADING, SET_ERROR } from '../types';

export const structurePreviewsReducer = (structurePreviews = {}, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case SET_ERROR: {
      return { structurePreviewsList: structurePreviews.structurePreviewsList, isLoading: false, error: error };
    }
  
    case SET_LOADING: {
      return { structurePreviewsList: structurePreviews.structurePreviewsList, isLoading: true, error: null };
    }
      
    case SET_STRUCTURE_PREVIEWS: {
      const { structurePreviews } = payload;
      return { structurePreviewsList: structurePreviews, isLoading: false, error: null };
    }
      
    default:
      return structurePreviews;
  }
}
