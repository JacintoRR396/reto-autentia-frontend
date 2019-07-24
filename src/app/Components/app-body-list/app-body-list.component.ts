import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/Course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-body-list',
  templateUrl: './app-body-list.component.html',
  styleUrls: ['./app-body-list.component.css']
})
export class AppBodyListComponent implements OnInit {

  titleCaption : string;
  aCourses : any = [];

  constructor(private oCoursesService: CoursesService) {
    this.titleCaption = 'Catálogo de Cursos';
  }

  ngOnInit() {

    this.oCoursesService.getCourses().subscribe(
      res => this.aCourses = res,
      err => console.error(err)
    );

  }

}
