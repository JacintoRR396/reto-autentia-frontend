import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/Course';

@Pipe({
  name: 'PagCourses',
  pure: true
})
export class PagCoursesPipe implements PipeTransform {

  transform(aCourses: Course[], iPageSize: number, iPageCurrent: number): Course[] {
    if (!aCourses.length) return [];
    console.log(`Pipe » Número de Cursos Total: ${aCourses.length}`);
    // tslint:disable-next-line: no-parameter-reassignment
    iPageSize = iPageSize || 4;
    // tslint:disable-next-line: no-parameter-reassignment
    iPageCurrent = iPageCurrent || 1;
    // tslint:disable-next-line: no-parameter-reassignment
    iPageCurrent = iPageCurrent - 1;
    console.log(`Pipe » Página Actual: ${iPageCurrent}`);
    // tslint:disable-next-line: no-parameter-reassignment
    aCourses = aCourses.splice(iPageCurrent * iPageSize, (iPageCurrent + 1) * iPageSize);
    console.log(`Pipe » Número de Cursos Filtrados: ${aCourses.length}`);
    return aCourses;
  }

}
