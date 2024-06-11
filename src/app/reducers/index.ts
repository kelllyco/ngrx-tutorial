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
import { AuthState } from '../auth/reducers';

export const authFeatureKey = 'app';

export interface AppState {
    auth: AuthState
}