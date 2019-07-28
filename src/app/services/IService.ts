import { Course } from '../models/Course';

export interface IService {
  getCourses();

  getCourse(lId: number);

  addCourse(oCourse: Course);

  updateCourse(lId: number, oCourse: Course);

  deleteCourse(lId: number);
}
