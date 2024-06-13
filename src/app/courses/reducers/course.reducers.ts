import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course, compareCourses } from "../model/course";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";

export interface CoursesState extends EntityState<Course>{

    allCoursesLoaded: boolean
    // entity format!
    // entities: {[key:number]:Course} // courses should not be stored in state as an array, transform here into key val pair
    // ids: number[] // defines entity order

    // entity state does above much easier, gives a dict and ids which corresponds to natural order
}

// adapter provides traditional CRUD ops to the entity!!
export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses // function to sort
    // selectId: course => course.id // redundant bc it auto detects id, but nice to know
});

// empty entities map and empty ids array
export const initialCoursesState = adapter.getInitialState({
    allCoursesLoaded: false
}); 

export const coursesReducer = createReducer(
    initialCoursesState,

    on(CourseActions.allCoursesLoaded, 
        (state, action) => adapter.addMany(action.courses,
             {...state,
                    allCoursesLoaded:true
             })),

    on(CourseActions.courseUpdated, (state, action) =>
        adapter.updateOne(action.update, state) )
);

export const {selectAll} = adapter.getSelectors();