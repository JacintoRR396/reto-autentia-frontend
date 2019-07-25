import { Component, OnInit, Input } from '@angular/core';
import { AppBodyListComponent } from '../app-body-list/app-body-list.component';

@Component({
  selector: 'app-body-aside',
  templateUrl: './app-body-aside.component.html',
  styleUrls: ['./app-body-aside.component.css']
})
export class AppBodyAsideComponent implements OnInit {

  @Input() oABLCopm : AppBodyListComponent;

  constructor() { }

  ngOnInit() {

    /*if(this.oABLCopm.bReadyCourses){
      alert("Hay Comunicación");
    }*/

  }

}
