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

// use any bc want to just log current state
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log("state before: ", state);
    console.log("action", action);

    return reducer(state, action);
  }
}

// order matters, metareducers are invoked in order of array
export const metaReducers: MetaReducer<AppState>[] = 
  !environment.production ? [logger] : [];

