import { Component, OnInit } from '@angular/core';
import { ELevel } from 'src/app/models/ELevel';
import { CoursesStubService } from 'src/app/services/coursesStub.service';

@Component({
  selector: 'app-section-form-add',
  templateUrl: './app-section-fadd.component.html',
  styleUrls: ['./app-section-fadd.component.css']
})
export class AppSectionFAddComponent implements OnInit {

  sTitleHeader: string;
  aOptsLevel: string[];
  sTeacher: string;
  sLevel: ELevel;
  ELevel : typeof ELevel = ELevel;
  aOptsTeacher: string[];

  constructor(private oCoursesService : /*CoursesService*/CoursesStubService) {
    this.sTitleHeader = 'Añadir Curso';
  }

  ngOnInit() {

    const aOptsLevel = Object.keys(ELevel);
    this.aOptsLevel = aOptsLevel.slice(aOptsLevel.length / 2);
    this.aOptsTeacher = this.oCoursesService.getTeachers();

  }

  parseValueSlctTeacher(sTeacher: string) {
    this.sTeacher = sTeacher;
  }

  parseValueSlctLevel(sLevel: string) {
    console.log(sLevel);
    this.sLevel = ELevel[sLevel];
  }

}
