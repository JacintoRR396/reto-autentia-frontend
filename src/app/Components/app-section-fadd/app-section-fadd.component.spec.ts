import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionFAddComponent } from './app-section-fadd.component';

describe('AppSectionFAddComponent', () => {
  let component: AppSectionFAddComponent;
  let fixture: ComponentFixture<AppSectionFAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionFAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionFAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
