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
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';

export const authFeatureKey = 'app';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer

};

export const metaReducers: MetaReducer<AppState>[] = 
  !environment.production ? [] : [];

