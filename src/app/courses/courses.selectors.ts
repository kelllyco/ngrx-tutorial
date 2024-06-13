import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./reducers/course.reducers";

import * as fromCourses from './reducers/course.reducers';


export const selectCoursesState = createFeatureSelector<CoursesState>("courses");

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourses.selectAll
);

export const selectBeginnerCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category == 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category == 'ADVANCED')
);

// filter returns an array that is aligned w the course
export const selectPromoTotal = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.promo).length
);

export const areCoursesLoaded = createSelector(
    selectCoursesState,
    state => state.allCoursesLoaded
);