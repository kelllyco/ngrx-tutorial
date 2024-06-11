import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";

@Injectable() // class should not be injected anywhere in code, 
// ngrx is the only one to use it (except in auth.module)
export class AuthEffects {
    
    // takes function as input argument, returns side effect observable
    login$ = createEffect(() => 
            this.actions$
                .pipe(
                    ofType(AuthActions.login),
                    tap(action => localStorage.setItem('user', 
                        JSON.stringify(action.user))
                    )
                ),
                {dispatch: false}); // the false is important, says no action is dispatched, IMPT TO ADD

    constructor(private actions$: Actions) { // Actions is an observable from ngrx effects

        

        


    }
}