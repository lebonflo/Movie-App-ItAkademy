import AuthState from './auth.types';
import types from './types';
import {GenericAction} from '../redux.types';

const INITIAL_STATE: AuthState = {
  isAuthenticated: false,
  authCheckIsLoading: false,
  hasInit: false,
};
const authReducer = (state = INITIAL_STATE, action: GenericAction) => {
  switch (action.type) {
    case types.SET_AUTH_CHECK_IS_LOADING:
      return {
        ...state,
        authCheckIsLoading: action.payload,
      };
    case types.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case types.INIT_COMPLETE:
      return {
        ...state,
        hasInit: true,
      };
    default:
      return state;
  }
};

export default authReducer;
