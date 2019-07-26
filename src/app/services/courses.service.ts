import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Course } from '../models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  API_REST_URI = '/reto-autentia-backend/rest';
  PATH = '/courses';
  oHeaders = new HttpHeaders();

  constructor(private oHttp: HttpClient) {
    console.log('Service Courses is working!!!');
  }

  getCourses() : Observable<any> {
    return this.oHttp.get(this.API_REST_URI + this.PATH);
  }

  getCourse(sId : string) : Observable<any> {
    return this.oHttp.get(`${this.API_REST_URI}${this.PATH}/${sId}`);
  }

  addCourse(oCourse: Course) : Observable<any> {
    return this.oHttp.post(`${this.API_REST_URI}${this.PATH}`, oCourse);
  }

  updateCourse(sId : string, oCourse: Course) : Observable<any> {
    return this.oHttp.put(`${this.API_REST_URI}${this.PATH}/${sId}`, oCourse);
  }

  deleteCourse(sId : string) : Observable<any> {
    return this.oHttp.delete(`${this.API_REST_URI}${this.PATH}/${sId}`);
  }

}
