import { Injectable } from '@angular/core';

import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesStubService {

  aCourses : Course[] = [
    { lId: 1, sTitle: 'Introducción a JSF 2', sTeacher: 'Roberto Canales', sLevel: 'Intermedio', iNumHours: 25, bState: true },
    { lId: 2, sTitle: 'Novedades en Java 8', sTeacher: 'David Gómez', sLevel: 'Básico', iNumHours: 10, bState: true },
    { lId: 3, sTitle: 'Java para Sistemas', sTeacher: 'Alberto Moratilla', sLevel: 'Básico', iNumHours: 25, bState: true },
    { lId: 4, sTitle: 'Angular 2', sTeacher: 'Rubén Aguilera', sLevel: 'Intermedio', iNumHours: 25, bState: false },
    { lId: 5, sTitle: 'TDD: Outside-In vs Inside-Out', sTeacher: 'Jose Luis Rodríguez Villapecellín',
      sLevel: 'Avanzado', iNumHours: 35, bState: true },
    { lId: 6, sTitle: 'Angular JS', sTeacher: 'Rubén Aguilera', sLevel: 'Básico', iNumHours: 45, bState: true },
    { lId: 7, sTitle: 'Angular 6', sTeacher: 'Rubén Aguilera', sLevel: 'Intermedio', iNumHours: 65, bState: true },
    { lId: 8, sTitle: 'Java 8 OCA', sTeacher: 'David Gómez', sLevel: 'Básico', iNumHours: 55, bState: false },
    { lId: 9, sTitle: 'Java 8 OCP', sTeacher: 'David Gómez', sLevel: 'Avanzado', iNumHours: 65, bState: true }
  ];

  constructor() {
    console.log('Service Stub Courses is working!!!');
  }

  getCourses() : Course[] {
    return this.aCourses;
  }

  getCourse(sId : string) : Course {
    return this.aCourses[parseInt(sId, 10)];
  }

  addCourse(oCourse: Course) : void {
    this.aCourses.push(oCourse);
  }

  updateCourse(sId : string, oCourse: Course) : void {
    //TODO    
  }

  deleteCourse(lId) : Course[] {
    //TODO
    this.aCourses.forEach((element) => {
      if (element.lId === lId) {
        this.aCourses.find(lId);
        this.aCourses.splice(lId, 1);
        console.log('Eliminado el Curso : ' + lId);
      }
    });
    return this.aCourses;
  }

}
