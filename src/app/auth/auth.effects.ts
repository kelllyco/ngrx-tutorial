import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

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


    logout$ = createEffect(() => 
            this.actions$
                .pipe(
                    ofType(AuthActions.logout),
                    tap(action => {
                        localStorage.removeItem('user');
                        this.route.navigateByUrl('/login');

                    })
                ),
                {dispatch: false});

    constructor(private actions$: Actions,
            private route: Router) { // Actions is an observable from ngrx effects

        

        


    }
}