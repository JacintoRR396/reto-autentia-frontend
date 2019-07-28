import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PagCourses'
})
export class PagCoursesPipe implements PipeTransform {

  transform(aCourses: any[], iPageSize: number, iPageCurrent: number): any[] {
    if (!aCourses.length) return [];
    iPageSize = iPageSize || 4;
    iPageCurrent = iPageCurrent || 1;
    iPageCurrent = iPageCurrent - 1;
    return aCourses.splice(iPageCurrent * iPageSize, (iPageCurrent + 1) * iPageSize);
  }

}
