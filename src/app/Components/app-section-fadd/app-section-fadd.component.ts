import { Component, OnInit } from '@angular/core';
import { ELevel } from 'src/app/models/ELevel';
import { CoursesStubService } from 'src/app/services/coursesStub.service';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-section-form-add',
  templateUrl: './app-section-fadd.component.html',
  styleUrls: ['./app-section-fadd.component.css']
})
export class AppSectionFAddComponent implements OnInit {

  sTitleHeader: string;
  oCourseAdd : Course;
  aOptsTeacher: string[];
  aOptsLevel: string[];
  sLevel: ELevel;
  ELevel : typeof ELevel = ELevel;
  sMsgError: string;

  constructor(private oCoursesService : /*CoursesService*/CoursesStubService) {
    this.sTitleHeader = 'Añadir Curso';
  }

  ngOnInit() {

    this.oCourseAdd = new Course;
    this.oCourseAdd.lId = this.oCoursesService.getCourses().length;
    this.oCourseAdd.iNumHours = 5;
    this.aOptsTeacher = this.oCoursesService.getTeachers();
    const aOptsLevel = Object.keys(ELevel);
    this.aOptsLevel = aOptsLevel.slice(aOptsLevel.length / 2);

  }

  onSubmitAdd(oFormAdd: NgForm) {
    console.log(oFormAdd);
    if (oFormAdd.valid) {
      // TODO
      console.log(this.oCourseAdd);
    } else {
      // TODO
      console.log('Faltan campos por rellenar');
    }
  }

  parseValueSlctTeacher(sTeacher: string) : void {
    this.oCourseAdd.sTeacher = sTeacher;
  }
  parseValueSlctLevel(sLevel: string) : void {
    this.oCourseAdd.sLevel = sLevel;
  }

}
