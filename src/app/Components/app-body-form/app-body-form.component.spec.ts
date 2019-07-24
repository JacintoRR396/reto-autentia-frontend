import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBodyFormComponent } from './app-body-form.component';

describe('AppBodyFormComponent', () => {
  let component: AppBodyFormComponent;
  let fixture: ComponentFixture<AppBodyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBodyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBodyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
