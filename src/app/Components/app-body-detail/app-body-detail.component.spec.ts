import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBodyDetailComponent } from './app-body-detail.component';

describe('AppBodyDetailComponent', () => {
  let component: AppBodyDetailComponent;
  let fixture: ComponentFixture<AppBodyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBodyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBodyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
