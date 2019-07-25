import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Course } from '../models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  API_REST_URI = '/reto-autentia-backend/rest';
  oHeaders = new HttpHeaders();

  constructor(private oHttp: HttpClient) {
    console.log('Service Courses is working!!!');
  }

  getCourses(){
    return this.oHttp.get(this.API_REST_URI + '/courses');
  }

  getCourse(sId : string){
    return this.oHttp.get(`${this.API_REST_URI}/courses/${sId}`);
  }

  addCourse(oCourse: Course){
    return this.oHttp.post(`${this.API_REST_URI}/courses`, oCourse);
  }

  updateCourse(sId : string, oCourse: Course){
    return this.oHttp.put(`${this.API_REST_URI}/courses/${sId}`, oCourse);
  }

  deleteCourse(sId : string){
    return this.oHttp.delete(`${this.API_REST_URI}/courses/${sId}`);
  }

}