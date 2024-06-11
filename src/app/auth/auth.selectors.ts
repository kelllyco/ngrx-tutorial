import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducers";
import { AuthState } from "./reducers";

// typesafe version of state => state["auth"]
export const selectAuthState = 
    createFeatureSelector<AuthState>("auth");

// mapping function that has memory, so as long as input doesnt change, output
// wont be recalculated / executed
export const isLoggedIn = createSelector(
    selectAuthState,
    auth => !!auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn, // can be used bc is mapping function
    loggedIn => !loggedIn
);
