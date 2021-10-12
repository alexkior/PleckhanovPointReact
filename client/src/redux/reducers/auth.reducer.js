import { SET_AUTH, LOG_OUT, SET_LOADING, SET_ERROR } from "../types";

export const authReducer = (users = {}, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case SET_ERROR: {
      return { usersIn: users.usersIn, isLoading: false, error: error };
    }

    case SET_LOADING: {
      return { usersIn: users.usersIn, isLoading: true, error: null };
    }

    case SET_AUTH: {
      const { users } = payload;
      return { usersIn: users, isLoading: false, error: null };
    }

    // case LOG_OUT: {
    //   return { usersIn: users.usersIn, isLoading: false, error: null };
    // }

    default:
      return users;
  }
};
