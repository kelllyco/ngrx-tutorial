import { createAction } from "@ngrx/store";

export const loadAllCourses = createAction(
    "[Course Resolver] Load All Courses" // more a command than an event :/

);

export const allCoursesLoaded = createAction(
    "[Load Courses Effect] All Courses Loaded" // more of an event than a command
);