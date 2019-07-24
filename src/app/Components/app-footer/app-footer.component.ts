import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  author : string = "© Dev » JacintoRR396";

  constructor() { }

  ngOnInit() {
    
  }

}