import types from './types';

export const setIsAuthenticated = (isAuth: boolean) => ({
  type: types.SET_IS_AUTHENTICATED,
  payload: isAuth,
});

export const setAuthCheckIsLoading = (isLoading: boolean) => ({
  type: types.SET_AUTH_CHECK_IS_LOADING,
  payload: isLoading,
});

export const initComplete = () => ({
  type: types.INIT_COMPLETE,
});
