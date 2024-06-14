import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Course', serviceElementsFactory); 
    }
}
