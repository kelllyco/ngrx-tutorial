import { createAction, props } from "@ngrx/store"
import { User } from "./model/user.model";

// [action dispatch location] event being responded to

// login is a function we need to call to get a new action
export const login = createAction(
    "[Login Page] User Login",
    props<{user: User}>()
);

// no payload needed
export const logout = createAction(
    "[Top Menu] Logout",
)