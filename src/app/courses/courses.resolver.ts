import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { Store, select } from "@ngrx/store";
import { allCoursesLoaded, loadAllCourses } from "./course.actions";
import { filter, finalize, first, tap } from "rxjs/operators";
import { areCoursesLoaded } from "./courses.selectors";

@Injectable()
export class CoursesResolver implements Resolve<any>{

    loading = false;

    constructor(private store:Store<AppState>) {
        
    }
    resolve(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Observable<any> {
            
        return this.store
            .pipe(
                select(areCoursesLoaded),
                tap(coursesLoaded => {
                    if (!this.loading && !coursesLoaded) { // keeps load all courses from running multiple times at once
                        this.loading = true;
                        this.store.dispatch(loadAllCourses());
                    }
                }),
                filter(coursesLoaded => coursesLoaded), // only emit a value when the courses have been loaded
                first(), // wait for observable to emit one value, then trigger completed
                finalize(() => this.loading = false)
            );
    }
}