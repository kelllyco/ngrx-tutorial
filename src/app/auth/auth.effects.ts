import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable() // class should not be injected anywhere in code, 
// ngrx is the only one to use it (except in auth.module)
export class AuthEffects {
    constructor(private actions$: Actions) { // Actions is an observable from ngrx effects
        actions$.subscribe(action => {
            if (action.type == '[Login Page] User Login') {
                localStorage.setItem('user', 
                JSON.stringify(action["user"]));
            }
        });
    }
}