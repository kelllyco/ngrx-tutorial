import {BrowserModule} from '@angular/platform-browser';
import {NgModule, isDevMode} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';

import {EffectsModule} from '@ngrx/effects';
import {EntityDataModule} from '@ngrx/data';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthGuard } from './auth/auth.guard';
import { reducers, metaReducers} from './reducers';

// courses is lazy loaded

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    canActivate: [AuthGuard] // any path in router containging /courses will be protected by AuthGuard
  },
  {
    path: '**',
    redirectTo: '/'
  }
];



@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatToolbarModule,
        AuthModule.forRoot(), // forRoot gets rid of lazy loading, loads eagerly
        StoreModule.forRoot(reducers, {metaReducers}),
        EffectsModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({ // for time travelling debugger
          stateKey: 'router',
          routerState: RouterState.Minimal // saves serializable version of router state
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })], providers: [provideHttpClient(withInterceptorsFromDi())]
       })
export class AppModule {
}
