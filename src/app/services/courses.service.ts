import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Course } from '../models/Course';
import { Observable } from 'rxjs';
import { IService } from './IService';

@Injectable({
  providedIn: 'root'
})
export class CoursesService implements IService {

  API_REST_URI = '/reto-autentia-backend/rest';
  PATH = '/courses';
  private oHeaders = new HttpHeaders();

  constructor(private oHttp: HttpClient) {
    console.log('Service Courses is working!!!');
  }

  getCourses() : Observable<any> {
    return this.oHttp.get(this.API_REST_URI + this.PATH);
  }

  getCourse(lId: number) : Observable<any> {
    return this.oHttp.get(`${this.API_REST_URI}${this.PATH}/${lId}`);
  }

  addCourse(oCourse: Course) : Observable<any> {
    return this.oHttp.post(`${this.API_REST_URI}${this.PATH}`, oCourse);
  }

  updateCourse(lId : number, oCourse: Course) : Observable<any> {
    return this.oHttp.put(`${this.API_REST_URI}${this.PATH}/${lId}`, oCourse);
  }

  deleteCourse(lId: number) : Observable<any> {
    return this.oHttp.delete(`${this.API_REST_URI}${this.PATH}/${lId}`);
  }

}
