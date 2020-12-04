import * as firebase from 'firebase/app';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {RootState} from '../redux.types';
import {
  setIsAuthenticated,
  setAuthCheckIsLoading,
  initComplete,
} from './actions';

type ThunkResult<R> = ThunkAction<R, RootState, null, Action>;

const authCheck = (): ThunkResult<Promise<any>> => {
  return async (dispatch) => {
    dispatch(setAuthCheckIsLoading(true));

    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          await Promise.all([
            dispatch(setIsAuthenticated(true)),
            dispatch(setAuthCheckIsLoading(false)),
            dispatch(initComplete()),
          ]);
          resolve(user.uid);
        } else {
          await Promise.all([
            dispatch(setIsAuthenticated(false)),
            dispatch(setAuthCheckIsLoading(false)),
            dispatch(initComplete()),
          ]);
          reject(Error('It broke'));
        }
      });
    });
  };
};
export default {
  authCheck,
  setIsAuthenticated,
};
