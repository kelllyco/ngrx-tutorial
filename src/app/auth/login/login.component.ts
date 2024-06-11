import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";

import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import {AuthState} from "../reducers/index";
import { login } from '../auth.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb:FormBuilder,
      private auth: AuthService,
      private store: Store<AuthState>,
      private router:Router) {

      this.form = fb.group({
          email: ['test@angular-university.io', [Validators.required]],
          password: ['test', [Validators.required]]
      });

  }

  ngOnInit() {

  }

  login() {
    const val = this.form.value;

    this.auth.login(val.email, val.password)
    .pipe(
      tap(user => {
        console.log(user);

        // dispatch takes an action...an action is a plain js obj that we send
        // to the store in order to trigger some modification of the store state

        // does crud stuff abstractly, store makes the decisions...might make
        // http request to make things more complete...keeps things from being
        // tightly coupled

        // dispatch login triggers the on login action reducer

        this.store.dispatch(login({user}));
        
        this.router.navigateByUrl('/courses');
      })
    )
    .subscribe(
          noop,
          () => alert('Login Failed')
      );
  }

}

