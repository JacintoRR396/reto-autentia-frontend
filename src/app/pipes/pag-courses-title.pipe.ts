import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/Course';

@Pipe({
  name: 'PagCoursesTitle',
  pure: true
})
export class PagCoursesTitlePipe implements PipeTransform {

  transform(aCourses: Course[], sSearchTitle: string): Course[] {
    if (!aCourses || !sSearchTitle) { return aCourses; }
    return aCourses.filter(course =>
      course.sTitle.toLowerCase().indexOf(sSearchTitle.toLowerCase()) !== -1);
  }

}
