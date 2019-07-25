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
  aCourses : Course[] = [];
  bReadyCourses : boolean = false;

  constructor(private oCoursesService: CoursesService) {
    this.titleCaption = 'Catálogo de Cursos';
  }

  ngOnInit() {

    this.getCourses();

  }

  public getCourses(){
    this.oCoursesService.getCourses().subscribe(
      res => {
        let aRes : Object[] = res as Object[];
        aRes.forEach(element => {
          this.aCourses.push(Course.fromArray(element));
        });
        this.bReadyCourses = true;
      },
      err => console.error(err)
    );
  }

}
