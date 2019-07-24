import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBodyListComponent } from './app-body-list.component';

describe('AppBodyListComponent', () => {
  let component: AppBodyListComponent;
  let fixture: ComponentFixture<AppBodyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBodyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBodyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
