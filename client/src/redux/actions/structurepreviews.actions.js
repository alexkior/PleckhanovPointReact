import { GET_STRUCTURE_PREVIEWS, SET_STRUCTURE_PREVIEWS, SET_LOADING, SET_ERROR } from '../types';

export const getStructurePreviews = () => ({
  type: GET_STRUCTURE_PREVIEWS
})

export const setStructurePreviews = (structurePreviews) => ({
  type: SET_STRUCTURE_PREVIEWS,
  payload: {structurePreviews}
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const setError = (error) => ({
  type: SET_ERROR,
  error
})
