import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/Course';
import { CoursesService } from '../../services/courses.service';
import { CoursesStubService } from '../../services/coursesStub.service';
import { Catalogue } from 'src/app/models/Catalogue';

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
  iPageTotal: number;
  sSearchTitle: string;
  bReadyCourses: boolean;
  bOrderAsc: boolean;


  constructor(private oCoursesService : /*CoursesService*/CoursesStubService) {
    this.sTitleCaption = 'Catálogo de Cursos';
    this.iPageSize = 4;
    this.iPageCurrent = 1;
    this.bOrderAsc = false;
  }

  ngOnInit() {

    this.getCourses();

  }

  public updatePage(iPageCurrent: number) {
    // this.getCourses();
    if (iPageCurrent > 0 && iPageCurrent <= this.iPageTotal) {
      this.iPageCurrent = iPageCurrent;
      console.log(`CompList » Página Actual: ${this.iPageCurrent}`);
    } else {
      console.log(`CompList » Página fuera de Rango : ${iPageCurrent}.`);
    }
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
    } else {
      this.aCourses = this.oCoursesService.getCourses();
    }
    this.iPageTotal = (this.aCourses.length % this.iPageSize) + 1;
    this.bReadyCourses = true;
  }

  public addCourse(oCourse : Course) : void {
    console.log(this.aCourses.find(course => course.lId === oCourse.lId));
  }

  public updateCourse(oCourse : Course) : void {
    // TODO
    console.log(this.aCourses.find(course => course.lId === oCourse.lId));
  }

  public deleteCourse(oCourse : Course) : void {
    if (this.oCoursesService instanceof CoursesService) {
      // TODO
    } else {
      this.aCourses = this.oCoursesService.deleteCourse(oCourse.lId);
    }
  }

  public sort(sAttr: string) : void {
    if (this.bOrderAsc) {
      this.aCourses = Catalogue.sort(this.aCourses, sAttr);
      this.bOrderAsc = false;
    } else {
      this.aCourses = Catalogue.sort(this.aCourses, sAttr, true);
      this.bOrderAsc = true;
    }
  }

}
