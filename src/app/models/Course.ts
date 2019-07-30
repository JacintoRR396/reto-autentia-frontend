import { ICourse } from './ICourse';

export class Course implements ICourse{

  lId: number;
  sTitle: string;
  sTeacher: string;
  sLevel: string;
  iNumHours: number;
  bState: boolean;

  constructor(id? : number, title? : string, teacher? : string, level? : string, numHours? : number, state? : boolean) {
    this.lId = id;
    this.sTitle = title;
    this.sTeacher = teacher;
    this.sLevel = level;
    this.iNumHours = numHours;
    this.bState = state;
  }

  public static fromArray(res : Object):Course {
    return new Course(res['id'], res['titulo'], res['profesor'], res['nivel'], res['numero-horas'], res['activo']);
  }

}
