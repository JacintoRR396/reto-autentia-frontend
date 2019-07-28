import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/Course';
import { CoursesService } from '../../services/courses.service';
import { CoursesStubService } from '../../services/coursesStub.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './app-section-list.component.html',
  styleUrls: ['./app-section-list.component.css']
})
export class AppSectionListComponent implements OnInit {

  sTitleCaption : string;
  aCourses : Course[] = [];
  oCourseSelect : Course = new Course();
  iPageSize: number;
  iPageCurrent: number;
  bReadyCourses : boolean;


  constructor(private oCoursesService : /*CoursesService | */CoursesStubService) {
    this.sTitleCaption = 'Catálogo de Cursos';
    this.iPageSize = 4;
    this.iPageCurrent = 1;
  }

  ngOnInit() {

    this.getCourses();

  }

  public getCourses() {
    if (this.oCoursesService instanceof CoursesService) {
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
    }else {
      this.aCourses = this.oCoursesService.getCourses();
    }
  }

  public addCourse(oCourse : Course) : void {
    console.log(this.aCourses.find(course => course.lId === oCourse.lId));
  }

  public updateCourse(oCourse : Course) : void {
    console.log(this.aCourses.find(course => course.lId === oCourse.lId));
  }

  public deleteCourse(oCourse : Course) : void {
    if (this.oCoursesService instanceof CoursesService) {
      // TODO
    } else {
      this.aCourses = this.oCoursesService.deleteCourse(oCourse.lId);
    }
  }

}
