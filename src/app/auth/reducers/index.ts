import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
    initialAuthState, // first argument

    // tells reducer how to respond to on login action
    on(AuthActions.login, (state, action) => {
      return {
        user: action.user // action is of type login
      }
    }),


    on(AuthActions.logout, (state, action) => {
      return {
        user: undefined
      }
    })
);