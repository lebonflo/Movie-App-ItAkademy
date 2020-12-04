import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import AuthState from './auth/auth.types';

export type RootState = {
  auth: AuthState;
};

export type GenericAction = {
  type: string;
  payload?: any;
};

export type ThunkDispatchType = ThunkDispatch<RootState, null, Action>;
