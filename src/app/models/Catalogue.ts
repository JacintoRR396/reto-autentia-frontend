import { Course } from './Course';

export class Catalogue {

  aCourses: Course[] = [];

  public static sortByTitle(aCourses: Course[], bDesc?: boolean): Course[] {
    aCourses.sort((c1, c2) => {
      let nRes = 0;
      if (c1.sTitle < c2.sTitle) {
        (bDesc) ? nRes = 1 : nRes = -1;
      } else if (c1.sTitle > c2.sTitle) {
        (bDesc) ? nRes = -1 : nRes = 1;
      } else {
      }
      return nRes;
    });
    return aCourses;
  }

}
