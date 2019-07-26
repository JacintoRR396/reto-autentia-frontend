import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/Course';
import { CoursesService } from '../../services/courses.service';
import { CoursesStubService } from '../../services/coursesStub.service';

@Component({
  selector: 'app-body-list',
  templateUrl: './app-body-list.component.html',
  styleUrls: ['./app-body-list.component.css']
})
export class AppBodyListComponent implements OnInit {

  sTitleCaption : string;
  aCourses : Course[] = [];
  bReadyCourses : boolean;
  oCourseSelect : Course = new Course();

  constructor(private oCoursesService: CoursesStubService) {
    this.sTitleCaption = 'Catálogo de Cursos';
  }

  ngOnInit() {

    this.getCourses();

  }

  public getCourses() {
    this.aCourses = this.oCoursesService.getCourses();
    // this.oCoursesService.getCourses().subscribe(
    //   (res) => {
    //     const aRes : Object[] = res as Object[];
    //     aRes.forEach((element) => {
    //       this.aCourses.push(Course.fromArray(element));
    //     });
    //     this.bReadyCourses = true;
    //   },
    //   err => console.error(err)
    // );
  }

  public addCourse(oCourse : Course) : void {
    console.log(this.aCourses.find(course => course.lId === oCourse.lId));
  }

  public updateCourse(oCourse : Course) : void {
    console.log(this.aCourses.find(course => course.lId === oCourse.lId));
  }

  public deleteCourse(oCourse : Course) : void {
    console.log(this.aCourses.find(course => course.lId === oCourse.lId));
    //this.aCourses = this.oCoursesService.deleteCourse(oCourse.lId);
  }

}
