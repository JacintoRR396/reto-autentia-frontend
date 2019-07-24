import { ICourse } from './ICourse';

export class Course implements ICourse{
    
    lId: number;
    sTitle: string;
    sTeacher: string;
    sLevel: string;
    iNumHours: number;
    bState: boolean;

    constructor(id : number, title : string, teacher : string, level : string, numHours : number, state : boolean){
        this.lId = id;
        this.sTitle = title;
        this.sTeacher = teacher;
        this.sLevel = level;
        this.iNumHours = numHours;
        this.bState = state;
    }

    

}