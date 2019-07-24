import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBodyAsideComponent } from './app-body-aside.component';

describe('AppBodyAsideComponent', () => {
  let component: AppBodyAsideComponent;
  let fixture: ComponentFixture<AppBodyAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBodyAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBodyAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
